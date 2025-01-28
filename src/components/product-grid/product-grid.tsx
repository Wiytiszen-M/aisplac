const ProductGrid = () => {
  return (
    <div className="min-h-screen bg-navy-900 p-8 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 flex flex-col space-y-4"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">BARBIERI</h2>
              <p className="text-sm text-gray-600">
                Montante 6g Rigidiza e0.52 (40px12x2.6m)
              </p>
              <p className="text-xs text-gray-400">SKU: 000000</p>
            </div>

            <div className="flex-grow flex items-center justify-center">
              {/* Placeholder for image - omitted as requested */}
              <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">Placeholder</span>
              </div>
            </div>

            <button className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 rounded text-sm font-medium text-gray-700">
              AGREGAR AL CARRITO
            </button>
          </div>
        ))}
      </div>
      <div className="bg-navy-900 p-4 w-full flex justify-center">
        <nav className="flex space-x-4" aria-label="Pagination">
          {[1, 2, 3, 4, 5].map((page, index) => (
            <button
              key={page}
              className={`px-1 text-sm transition-colors duration-200 ${
                page === 1
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              aria-current={page === 1 ? "page" : undefined}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ProductGrid;
