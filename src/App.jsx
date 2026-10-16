//import listaProductos from './data/productos.json'; // <--- Importas tu JSON aparte
import { useState, useEffect } from 'react'; // 1. Importa los hooks necesarios
import { ProductCard } from './components/ProductCard';

export default function App() {
  const [listaProductos, setListaProductos] = useState([]); // Estado para guardar los productos

  // 2. Usamos useEffect para hacer el fetch cuando cargue el componente
  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then((res) => res.json())
      .then((data) => setListaProductos(data))
      .catch((error) => console.error('Error al cargar la API:', error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 justify-items-center">
      {listaProductos.map((item) => (
        <ProductCard key={item.id} producto={item} />
      ))}
    </div>
  );
}
