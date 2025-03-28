"use client";
import "./index.css";
import Image from "next/image";
import React, { useState } from "react";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Link from "next/link";
import ParticlesComponent from "../../components/Particles";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Reset the loading state after 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  };

  return (
    <div className="w-screen h-screen grid place-items-center">
      <ParticlesComponent />
      {/* <Image
        src="/profilebg.jpeg"
        alt="stars"
        layout="fill"
        className="w-screen h-screen absolute -z-10"
      /> */}

      {!showModal && (
        <div
          onClick={handleClick}
          style={{
            background:
              "linear-gradient(324deg, rgba(169,52,156,1) 25%, rgba(23,79,141,1) 83%)",
            boxShadow: "5px 5px 20px #888888",
          }}
          className={`z-50 text-3xl font-semibold h-60 w-60 bg-opacity-80 text-white grid place-items-center rounded-full cursor-pointer transition-all duration-250 hover:bg-opacity-100 shadow-2xl ${
            isLoading ? "animate-spin-border" : ""
          }`}
        >
          <p className="text-center">
            Find an <br />
            Opponent
          </p>
        </div>
      )}

      <div className="-mt-32">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Most played cards
        </h1>
        <div className="flex gap-6">
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
        </div>
      </div>

      {showModal && (
        <div className="w-screen h-screen grid place-items-center bg-black bg-opacity-50 absolute top-0 left-0 z-20 ">
          <div className="bg-white rounded-2xl w-[300px] h-[250px] grid place-items-center">
            <p className="text-center ">
              <span className="font-bold text-xl mb-4">Opponent found!</span>
              <br />
              <span className="italic under">Please accept the duel.</span>
            </p>
            <div className="flex gap-12">
              <button onClick={() => setShowModal(false)}>Decline</button>
              <Link href="/multiplayer" shallow>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-600 hover:opacity-75 text-white font-bold py-2 px-4 rounded"
                >
                  Accept
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
