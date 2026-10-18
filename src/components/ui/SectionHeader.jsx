// Línea divisora en gris claro, util para hacer diviones de secciones en una page

export function SectionDivider({ titulo, colorPunto = "bg-yellow-400" }) {
  return (
    <div className="flex items-center gap-4 my-8 w-full bg-transparent">
      
      {/* Indicador y Título */}
      <div className="flex items-center gap-3 shrink-0">
        <span className={`w-3.5 h-3.5 rounded-sm ${colorPunto}`}></span>
        <h2 className="text-xl font-bold tracking-tight text-white">
          {titulo}
        </h2>
      </div>

      <div className="flex-grow h-[1px] bg-zinc-700/60"></div>

    </div>
  );
}