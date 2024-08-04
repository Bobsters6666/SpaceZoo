"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <main className="w-screen h-screen overflow-hidden ">
      <div className="flex items-center justify-center mt-6 gap-4 bg-white w-fit mx-auto px-8 py-3 bg-opacity-30 rounded-full cursor-pointer shadow-xl">
        <h1 className="text-white text-center text-2xl font-bold">
          Explore Earth
        </h1>
        <CgChevronDown size={32} color="white" />
      </div>

      <Image
        src="/world-map.jpg"
        alt="map"
        layout="fill"
        priority
        className="w-screen h-screen -z-10 absolute"
      />

      <h2 className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-xl drop-shadow-2xl font-bold">
        Choose your next destination
      </h2>

      <div
        className="absolute left-[1380px] bottom-[110px] w-8 h-8 cursor-pointer"
        onClick={() => setOpenTooltip(true)}
      >
        {openTooltip && (
          <div className="relative">
            <div className="absolute -left-80 -top-48 text-white bg-black w-[310px] h-[185px] px-6 py-4 rounded-lg bg-opacity-80">
              <p className="text-lg">
                <span className=" font-semibold ">New Zealand </span>- land of
                the long white cloud
              </p>
              <p className="pt-2">Dare to explore?</p>
              <div className="flex justify-end mt-6">
                <Link href={"/nz"}>
                  <button className="bg-blue-600 px-4 py-2 flex gap-2 items-center rounded-lg duration-300 transition-all hover:bg-blue-700">
                    Explore <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
