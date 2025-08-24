"use client";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HeaderComponet() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const abrirMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {/* Header fijo arriba */}
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-4 z-30 shadow-lg">
        <button
          className="bg-gray-800 text-white px-2 py-2 rounded shadow-lg"
          onClick={abrirMenu}
        >
          <Bars3Icon className="w-8 h-8 text-white" />
        </button>
        <span className="ml-4 font-bold text-lg">Filón Caffee</span>
      </header>

      {/* Menú lateral */}
      {openMenu && (
        <div
          onClick={abrirMenu}
          className="fixed top-0 left-0 w-full h-full bg-gray-900/50 z-20"
        >
          <div
            className="fixed top-0 left-0 w-60 h-full bg-gray-300 pt-20 px-2 shadow flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href={"/Page/Home"}>
              <span className="p-2 bg-gray-800 text-white font-bold w-full h-10 flex items-center">
                Categoria
              </span>
            </Link>
            <Link href={"/Page/Home"}>
              <span className="p-2 bg-gray-800 text-white font-bold w-full h-10 flex items-center">
                Carrito
              </span>
            </Link>
            <Link href={"/Page/Home"}>
              <span className="p-2 bg-gray-800 text-white font-bold w-full h-10 flex items-center">
                Quejas y sugerencias
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Espaciador para que el contenido no quede debajo del header */}
      <div className="h-16" />
    </>
  );
}
