"use client";
import MenuCategoriaOpcionComponent from "@/Components/MenuComponent/MenuCategoriaOpcionCompnet/Page";
import { useState } from "react";
import productor from "@/lib/productor.json";
import PedirComponent from "@/Components/PedirComponent/Page";

export default function bebidasCalientesPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPedir, setOpenPedir] = useState(false);

  const abrirPedir = () => {
    setOpenPedir(!openPedir);
  };
  return (
    <div>
      {openPedir && (
        <div className="fixed inset-0   flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <button
              className="mb-4 bg-red-500 text-white px-2 py-1 rounded"
              onClick={abrirPedir}
            >
              Cerrar
            </button>
            <PedirComponent producto="Cafe" precio={40.0}  cerrarPedirModal={()=>{setOpenPedir(false)}} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 p-4 pt-24">
        {productor.map((item) => (
          <MenuCategoriaOpcionComponent
            abrirPedirModal={abrirPedir}
            key={item.id}
            producto={item.nombre}
            precio={item.precio}
            imagen={item.imagen}
          />
        ))}
      </div>
    </div>
  );
}
