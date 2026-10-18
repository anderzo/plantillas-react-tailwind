// hooks/useCrearProducto.js
import { useState } from 'react';
import { crearProducto } from '../services/productosService';

export function useCrearProducto() {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const crear = async (producto) => {
    setEnviando(true);
    setError(null);
    try {
      return await crearProducto(producto); // devuelve el producto creado
    } catch (err) {
      setError(err.message);
      return null; // null indica que falló
    } finally {
      setEnviando(false);
    }
  };

  return { crear, enviando, error };
}