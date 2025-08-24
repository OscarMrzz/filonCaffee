import React from "react";
import MenuPrincipalOpcionComponent from "../MenuPrincipalOpcionComponent/Page";
import categoria from "@/lib/categorias.json";

export default function MenuPrincipal() {
  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      {categoria.map((item) => (
        <MenuPrincipalOpcionComponent
          key={item.id}
          categoria={item.categoria}
          imagen={item.imagen}
        />
      ))}
    
      {/* Agrega más componentes aquí si lo necesitas */}
    </div>
  );
}
