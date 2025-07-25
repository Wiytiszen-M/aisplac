const FiltersPanel = () => {
  return (
    <div className="h-fit w-[295px] space-y-6 rounded-lg bg-slate-200/80 p-6 pb-24">
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

        <div className="space-y-4 pt-4">
          <h3 className="text-sm font-medium tracking-wide text-white">
            GAMA DE PRECIOS
          </h3>
          <div className="relative h-1 w-full rounded bg-slate-300">
            <div className="absolute h-1 w-1/2 bg-blue-500"></div>
            <div
              className="absolute -mt-1.5 h-4 w-4 cursor-pointer rounded-full bg-blue-500"
              style={{ left: '50%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
