import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/productosService';

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const cargar = async () => {
      try {
        const datos = await obtenerProductos(controller.signal);
        setProductos(datos);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        if (!controller.signal.aborted) setCargando(false);
      }
    };

    cargar();
    return () => controller.abort();
  }, []);

  return { productos, cargando, error };
}