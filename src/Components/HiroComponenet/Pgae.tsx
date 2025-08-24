import React from "react";
import Image from "next/image";

export default function Hiro() {
  return (
    <div className="h-60 w-full flex justify-center items-center bg-white  mb-4">
      <Image
        src="/imgs/imgHiro.jpg"
        alt="filon"
        width={400}
        height={400}
        className="w-70  h-full object-cover"
      />
    </div>
  );
}
