"use client";
import React from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';


export default function HeaderComponet() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const abrirMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div >
        <div>
            <button
        className="fixed top-4 left-4 z-20 bg-gray-800 text-white px-2 py-2 rounded shadow-lg"
        onClick={abrirMenu}>
       <span>
        <Bars3Icon className="w-8 h-8 text-white" />
       </span>
      </button>

        </div>
      
      <div className="">
        {openMenu && (
          <div className=" absolute top-0 left-0 w-full h-full bg-gray-900/50 shadow-lg z-10">
            <div className="w-60 h-screen bg-gray-300 pt-24 px-2 shadow"> 


            <ul className="flex flex-col gap-3"> 
              <li className="p-2 bg-gray-800 text-white font-bold w-full h-10  flex items-center">
                <a href="#">Categorias</a>
              </li>
              <li className="p-2 bg-gray-800 text-white font-bold w-full h-10  flex items-center">
                <a href="#">Carrito</a>
              </li>
              <li className="p-2 bg-gray-800 text-white font-bold w-full h-10  flex items-center">
                <a href="#">Quejas y sugerencias</a>
              </li>
            
              
            </ul>
                        </div>
          </div>
        )}
      </div>
    </div>
  );
}
