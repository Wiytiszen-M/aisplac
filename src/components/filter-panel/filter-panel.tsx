const FiltersPanel = () => {
  return (
    <div className="w-[295px] h-fit bg-slate-200/80 rounded-lg p-6 pb-24 space-y-6">
      <h2 className="text-lg font-medium tracking-wide text-white">FILTROS</h2>

      <div className="space-y-6 divide-y divide-slate-300">
        <div className="pt-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            MARCA
          </h3>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            TIPO DE PRODUCTO
          </h3>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            COLOR
          </h3>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            ORIGEN
          </h3>
        </div>

        <div className="pt-4 space-y-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            GAMA DE PRECIOS
          </h3>
          <div className="relative w-full h-1 bg-slate-300 rounded">
            <div className="absolute h-1 bg-blue-500 w-1/2"></div>
            <div
              className="absolute w-4 h-4 bg-blue-500 rounded-full -mt-1.5 cursor-pointer"
              style={{ left: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
