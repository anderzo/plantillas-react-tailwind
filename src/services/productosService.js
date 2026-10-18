const API_URL = 'http://localhost:3000/productos';

export async function obtenerProductos(signal) {

  const respuesta = await fetch(API_URL, { signal });
  if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);
  return await respuesta.json();

}

export async function crearProducto(producto) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);
  return await respuesta.json();
}