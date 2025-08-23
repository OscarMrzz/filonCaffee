import React from "react";
import MenuPrincipalOpcionComponent from "../MenuPrincipalOpcionComponent/Page";

export default function MenuPrincipal() {
  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      <MenuPrincipalOpcionComponent />
      {/* Agrega más componentes aquí si lo necesitas */}
    </div>
  );
}
