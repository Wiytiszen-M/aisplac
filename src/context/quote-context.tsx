"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type QuoteItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type QuoteContextType = {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearQuote: () => void;
  totalItems: number;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  // Load quote from localStorage on initial render
  useEffect(() => {
    const savedQuote = localStorage.getItem("quote");
    if (savedQuote) {
      try {
        const parsedQuote = JSON.parse(savedQuote);
        setItems(parsedQuote);
      } catch (error) {
        console.error("Failed to parse quote from localStorage", error);
      }
    }
  }, []);

  // Update localStorage and total items count when items change
  useEffect(() => {
    localStorage.setItem("quote", JSON.stringify(items));
    setTotalItems(items.reduce((total, item) => total + item.quantity, 0));
  }, [items]);

  const addItem = (newItem: QuoteItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        totalItems,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
