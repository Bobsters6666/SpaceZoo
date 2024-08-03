import React from "react";
import { CgUserlane } from "react-icons/cg";
import { CgCardHearts } from "react-icons/cg";
import { IoEarth } from "react-icons/io5";
import { RiPlanetFill } from "react-icons/ri";
import { GiStoneTablet } from "react-icons/gi";
import { Avatar } from "@mui/material";

export default function page() {
  return (
    <div className="flex flex-col gap-[2rem] pt-[1rem] font-normal text-[20px] min-w-full ">
      <Avatar src="/avatar.jpg" sx={{ width: 80, height: 80 }}/>
      <p>Welcome, JavaSkunk!</p>
      <div className="flex flex-row gap-[0.5rem] items-center">
        <RiPlanetFill size="25" />
        <p>Planet: Seraphea</p>
      </div>
      <div className="flex flex-row gap-[0.5rem] items-center">
        <GiStoneTablet size="25" />
        <p>Region: Aurora </p>
      </div>

      <div className="flex flex-row gap-[0.5rem] items-center">
        <CgCardHearts size="25" />
        <div className="flex flex-row">
          Collections: Congratulations! You've collected{" "}
          <p className="color-transition ml-1">10 Zoo cards </p>. Keep exploring
          to find more!
        </div>
      </div>
      <div className="flex flex-row gap-[0.5rem] items-center">
        <IoEarth size="25" />
        <div className="flex flex-row">
          Continents: You've explored{" "}
          <p className="color-transition ml-1"> 3 Earth continents</p>. Just 4
          more to complete your adventure!"
        </div>
      </div>
    </div>
  );
}
