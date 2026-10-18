// pages/Productos.jsx
import { useState } from 'react';
import { useProductos } from '../hooks/useProductos';
import { useCrearProducto } from '../hooks/useCrearProducto';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Productos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { productos, cargando, error, recargar } = useProductos();
  const { crear, enviando, error: errorCrear } = useCrearProducto();

  const handleCrear = async (datos) => {
    const creado = await crear({ ...datos, price: Number(datos.price) });
    if (creado) recargar();
    return Boolean(creado); // el modal usa esto para decidir si se cierra
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white flex flex-col items-center px-4 py-12 gap-6">
      <h1 className="text-3xl font-bold">Nuestro Catálogo</h1>

      <button
        onClick={() => setModalAbierto(true)}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm px-5 py-2.5 transition-all cursor-pointer"
      >
        + Nuevo producto
      </button>

      {cargando && <p>Cargando productos...</p>}
      {error && <p className="text-red-500">Hubo un error: {error}</p>}

      {!cargando && !error && (
        <div className="grid grid-cols-1 md:grid-cols-4 px-4 py-12 gap-6">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}

      <ProductModal
        open={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onSubmit={handleCrear}
        enviando={enviando}
        error={errorCrear}
      />
    </div>
  );
}