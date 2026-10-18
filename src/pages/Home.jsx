
//pagina de bienvenida, sera la primera pagina que se mostrar a los usurios

//componentes

//componentes atomicos
import { SectionDivider } from '../components/ui/SectionHeader';

function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white flex flex-col items-center px-4 py-12">
      <section className="w-full px-6 py-16 text-center shadow-lg">
        <p className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"> ¡HOLA! ESTA ES MI EMPRESA,  
          <span className="text-yellow-300"> ANDERZO </span></p>
      </section>

        {/* Nombre de la Empresa */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            ANDZ </span>
        </h1>

        {/* Mensaje de Saludo y Descripción */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
          ¡Me alegra tenerte aquí! Explora nuestros servicios, somos una empresa de desarrollo web y desarrollo de software, diseñados con la mejor tecnología, seguridad y calidad para ti.
        </p>

        <SectionDivider titulo="Explora" colorPunto="bg-emerald-500" />

        {/* Botones de Acción (Llamado a la Acción) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.98] text-black font-bold rounded-xl shadow-lg shadow-yellow-500/10 transition-all cursor-pointer"
            onClick={() => console.log('Explorar productos')}
          > Explorar Productos</button>

          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] text-zinc-200 font-semibold rounded-xl border border-zinc-700 transition-all cursor-pointer"
            onClick={() => console.log('Saber más')}
          > Saber Más </button>


        </div>
        <SectionDivider titulo="Sobre mi" colorPunto="bg-emerald-500" />
    </div>
  );
}

export default Home;