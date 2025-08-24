import Link from "next/link";
import React from "react";

type props = {
  categoria: string;
  imagen: string;
};
import Image from "next/image";

export default function MenuPrincipalOpcionComponent({
  categoria,
  imagen,
}: props) {
  return (
    <>
      <Link href={"/Page/MenuCategoria/BebidasCalientesPage"}>
        <div className=" h-60 w-full bg-gray-100 shadow">
          <div className=" w-full p-2 h-50 ">
            {imagen && (
              <Image
                src={imagen}
                alt={`Imagen de ${categoria}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            )}
            {!imagen && <span className="text-gray-400">Sin imagen</span>}
          </div>
          <h1 className="p-2 w-full flex justify-center">{categoria}</h1>
        </div>
      </Link>
    </>
  );
}
