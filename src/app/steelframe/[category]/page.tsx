import TripleArrowLeft from "@/app/assets/icons/triple-arrow-left";
import OutstandingProducts from "@/components/AISButton/outstanding-products/outstanding-products";
import FiltersPanel from "@/components/filter-panel/filter-panel";
import Header from "@/components/header/header";
import ProductGrid from "@/components/product-grid/product-grid";
import Link from "next/link";

const Category = () => {
  return (
    <section className="min-h-screen">
      <div
        className="absolute -z-10 top-0 flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      />
      <div
        className="absolute bottom-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(transparent 60%, #1c1936 78%)",
        }}
      />
      <Header />
      <div className="flex flex-col justify-center gap-24 px-[144px] mt-[240px] z-10">
        <Link href="/steelframe" className="flex items-center  gap-4">
          <TripleArrowLeft />
          Nombre de la categoria
        </Link>
        <div className="flex flex-col gap-32 w-full justify-center">
          <div className="flex">
            <FiltersPanel />
            <ProductGrid />
          </div>
          <OutstandingProducts />
        </div>
      </div>
    </section>
  );
};

export default Category;
