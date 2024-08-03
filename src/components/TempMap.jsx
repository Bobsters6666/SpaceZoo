import Image from "next/image";
import React from "react";

export default function TempMap() {
  return (
    <div className="relative h-screen">
      <Image
        src="/map.png"
        alt="Next.js Logo"
        layout="fill"
        className="select-none absolute -z-5"
      />
      hello
    </div>
  );
}
