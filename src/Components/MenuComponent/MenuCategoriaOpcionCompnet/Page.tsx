import React from "react";
import Image from 'next/image';

type props = {
  producto: string;
  precio: number;
  imagen: string;
  abrirPedirModal?: () => void;
};
export default function MenuCategoriaOpcionComponent({
  producto,
  precio,
  imagen,
  abrirPedirModal,
}: props) {

  const handleClick = () => {
    if (abrirPedirModal) {
      abrirPedirModal();
    }
  };
  return (
    <>
      <div onClick={handleClick}  className=" h-60 w-full bg-gray-100 shadow">
        <div className=" w-full p-2 h-40 ">
          <Image
            className="w-full h-full object-cover"
            src={`${imagen}`}
            alt={`Imagen de ${producto}`}
            width={400}
            height={400}

          />
        </div>
        <h1 className="p-2 w-full flex">{producto}</h1>
        <p className="p-2 w-full flex ">
          L <span>{precio}</span>{" "}
        </p>
      </div>
    </>
  );
}
