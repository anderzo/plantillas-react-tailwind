import React from 'react';
import { BsGithub, BsFacebook, BsInstagram, BsTwitter, BsDribbble } from 'react-icons/bs';

export default function MiFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-8">
          
          <div className="space-y-3">
            <a href="#" className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors">
              <BsGithub className="w-6 h-6" />
              <span className="font-bold text-lg tracking-wider"> Anderzo </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-0 sm:grid-cols-3 sm:gap-12">
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">About</h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Flowbite</a> </li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Tailwind CSS </a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow us </h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm"> Github </a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm"> Discord </a> </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4"> Legal </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm"> Privacy Policy </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-8 border-zinc-800" />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">&copy; 2026 <a href="#" className="hover:underline text-zinc-300">Anderzo™</a>. Todos los derechos reservados.</p>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-zinc-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <BsFacebook className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <BsInstagram className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <BsTwitter className="w-5 h-5" /> </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Dribbble"> 
              <BsDribbble className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}