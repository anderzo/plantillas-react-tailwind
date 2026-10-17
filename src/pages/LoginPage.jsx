
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando credenciales:', { email, password });
    // Aquí conectarás tu servicio Axios para autenticar con el Backend
  };

  return (
    // Contenedor principal con fondo negro degradado a gris muy oscuro
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 flex items-center justify-center p-4">
      
      {/* Tarjeta de Formulario de Login */}
      <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Iniciar Sesión
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Ingresa tus datos para acceder a tu cuenta
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo: Correo Electrónico */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Campo: Contraseña */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-zinc-300">
                Contraseña
              </label>
              <a href="#" className="text-xs text-yellow-400 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Botón Principal (Amarillo) */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.99] text-black font-bold rounded-xl shadow-lg shadow-yellow-500/10 transition-all cursor-pointer"
          >
            Ingresar
          </button>

        </form>

        {/* Separador */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-900 px-2 text-zinc-500">O</span>
          </div>
        </div>

        {/* Pie de tarjeta / Registro */}
        <p className="text-center text-sm text-zinc-400">
          ¿No tienes una cuenta?{' '}
          <a href="#" className="font-semibold text-yellow-400 hover:underline">
            Regístrate aquí
          </a>
        </p>

      </div>

    </div>
  );
}