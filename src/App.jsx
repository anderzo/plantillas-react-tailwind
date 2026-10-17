//import listaProductos from './data/productos.json'; // <--- Importas tu JSON aparte

//extenciones para el codigo
import { useState, useEffect } from 'react'; // 1. Importa los hooks necesarios
import { Routes, Route } from 'react-router-dom'; //para mapear las rutas, decide qué página mostrar según la URL

//imporatar componentes estaticos
import MiFooter from './components/Footer';
import MiNavBar from './components/NavBar';

//pages
import Home from './pages/Home';


export default function App() {

  return (
     <div className="bg-light text-dark min-vh-100 d-flex flex-column"> 
     <MiNavBar />
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>

     <MiFooter />
    </div>
  );
}
