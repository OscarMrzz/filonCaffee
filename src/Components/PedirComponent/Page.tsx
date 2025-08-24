"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
type Props = {
  producto: string;
  precio: number;
  cerrarPedirModal: () => void;
};

export default function PedirComponent({
  producto,
  precio,
  cerrarPedirModal,
}: Props) {
  const [cantidad, setCantidad] = React.useState(0);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };


  return (
    <div
      onClick={cerrarPedirModal}
      className="fixed bg-gray-900/50 w-full h-full top-0 left-0 z-40 flex justify-center items-center"
    >
      <div
        className="bg-gray-800 px-5 text-white w-60 h-36 flex flex-col justify-around items-center rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h2>{producto}</h2>

          <span>L {precio}</span>
        </div>
        <div className=" border-2 border-gray-200 w-full h-16 flex gap-4 justify-between items-center rounded-2xl px-5">
          <button
            className="w-10 h-10 bg-white rounded-4xl flex justify-center items-center"
            onClick={incrementar}
          >
            <MinusIcon className="w-6 h-6 text-gray-800 text-2xl font-bold" />
          </button>
          <span>{cantidad}</span>
          <button
            className="w-10 h-10 bg-white rounded-4xl flex justify-center items-center"
            onClick={decrementar}
          >
            <PlusIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
