
import React from "react";
import { CgUserlane } from "react-icons/cg";
import { CgCardHearts } from "react-icons/cg";
import { LiaAwardSolid } from "react-icons/lia";

export default function page() {
  return <div className="flex flex-col gap-[2rem] pt-[1.8rem] font-normal text-lg  ">
  
    <CgUserlane size="30"/>
    <p >Name</p>
    <p >Planet: Seraphea</p>
    <p >Region: Aurora </p>
    <div className="flex flex-row gap-[0.5rem] items-center">
    <p>You have collected 5 Zoo cards</p>
    <CgCardHearts size="20" />
    </div>
    <div className="flex flex-row gap-[0.5rem] items-center">
    <p >You have explored 3 Earth continents, 4 left to go!</p>
    <LiaAwardSolid  size="25" />
    </div>
  </div>;
}
