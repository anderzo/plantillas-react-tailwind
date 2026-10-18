// components/ProductModal.jsx
const input =
  "bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none block w-full px-3 py-2.5 placeholder:text-zinc-500";
const label = "block mb-2.5 text-sm font-medium text-white";

export default function ProductModal({ open, onClose, onSubmit, enviando, error }) {
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await onSubmit(Object.fromEntries(new FormData(e.target)));
    if (ok) onClose(); // solo cierra si se creó bien
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-700 pb-4 md:pb-5">
          <h3 className="text-lg font-medium text-white">Crear producto</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-xl w-9 h-9 cursor-pointer"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-2 py-4 md:py-6">
            <div className="col-span-2">
              <label htmlFor="name" className={label}>Nombre</label>
              <input id="name" name="name" className={input} placeholder="Nombre del producto" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="price" className={label}>Precio</label>
              <input type="number" id="price" name="price" className={input} placeholder="$2999" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="category" className={label}>Categoría</label>
              <select id="category" name="category" className={input} defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option value="TV">TV/Monitores</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Consola</option>
                <option value="PH">Teléfonos</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className={label}>Descripción</label>
              <textarea id="description" name="description" rows="4" className={input} placeholder="Describe el producto" />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm pb-4">{error}</p>}

          <div className="flex items-center gap-4 border-t border-zinc-700 pt-4 md:pt-6">
            <button
              type="submit"
              disabled={enviando}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm px-5 py-2.5 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enviando ? 'Guardando...' : 'Agregar producto'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold rounded-xl text-sm px-5 py-2.5 transition-all cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}