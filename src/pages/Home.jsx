function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white flex flex-col justify-center items-center px-4 py-12">
      
      {/* Contenedor principal estilo tarjeta flotante con sombras */}
      <div className="max-w-3xl w-full text-center bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
        
        {/* Badge superior opcional decorativo */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full uppercase">
          Bienvenido a la Plataforma
        </span>

        {/* Nombre de la Empresa */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            ANZ Tech
          </span>
        </h1>

        {/* Mensaje de Saludo y Descripción */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
          ¡Nos alegra tenerte aquí! Explora nuestros productos y servicios diseñados con la mejor tecnología y calidad para ti.
        </p>

        {/* Botones de Acción (Llamado a la Acción) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] text-black font-bold rounded-xl shadow-lg shadow-yellow-500/10 transition-all cursor-pointer"
            onClick={() => console.log('Explorar productos')}
          >
            Explorar Productos
          </button>

          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] text-zinc-200 font-semibold rounded-xl border border-zinc-700 transition-all cursor-pointer"
            onClick={() => console.log('Saber más')}
          >
            Saber Más
          </button>
        </div>

      </div>

    </div>
  );
}

export default Home;