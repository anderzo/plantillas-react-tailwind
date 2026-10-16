export function ProductCard({ producto }) {
  return (
    // 1. Nakabilag ti 'relative z-10' ditoy ruar a contenedor tapno saan a lapdan ti dadduma a kard ti pinduton
    <div className="relative z-10 max-w-xs w-full bg-[#1b263b] rounded-xl overflow-hidden shadow-md border border-slate-700 flex flex-col h-full">
      
      {/* Contenedor ti Rerambang / Ladawan */}
      <div className="bg-white p-4 h-64 w-full flex items-center justify-center">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Contenedor ti Adipen ken Teksto */}
      <div className="bg-blue-800 p-5 flex-grow flex flex-col justify-between text-white">
        <div>
          {/* Naranani / Título ti produkto */}
          <h3 className="text-lg font-bold tracking-tight mb-3">
            {producto.nombre}
          </h3>

          {/* Bituen / Rating */}
          <div className="flex items-center gap-1 mb-4">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="bg-slate-200 text-slate-800 text-xs font-bold px-2 py-0.5 rounded ml-1">
              {producto.rating}
            </span>
          </div>
        </div>

        {/* Nget-nget / Ngina ken Pinduton (Button) */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-2xl font-black text-white">
            ${producto.precio}
          </span>
          <button 
            type="button" 
            className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors shadow-md active:scale-95"
            onClick={() => console.log(`Naipnayon: ${producto.nombre}`)}
          >
            + Agregar
          </button>
        </div>
      </div>

    </div>
  );
}