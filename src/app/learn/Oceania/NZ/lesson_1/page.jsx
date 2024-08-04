"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHandPointDown,
  FaHandPointUp,
  FaRegHandPointRight,
  FaRegHandPointUp,
  FaX,
} from "react-icons/fa6";

const TitlePage = () => {
  const audioRef = useRef(null);
  const backgroundAudioRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false); // State to control zoom
  const [focusedButtonIndex, setFocusedButtonIndex] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const router = useRouter();

  const handleExploreClick = () => {
    setIsZoomed(true); // Trigger zoom animation
  };

  const handleCheckHereClick = (index) => {
    setFocusedButtonIndex(index);
  };

  const handleExitClick = () => {
    setFocusedButtonIndex(null); // Reset the focused button index
  };

  setTimeout(() => {
    setShowButton(true);
  }, 9000);

  // Define animation variants
  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    focused: { scale: 1.3, opacity: 1 }, // Zoom in around the button
  };

  // Play background music
  useEffect(() => {
    backgroundAudioRef.current.play();
  }, []);

  // when surfer button is clicked, play surfer_recording.mp3
  useEffect(() => {
    if (focusedButtonIndex === 0) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [focusedButtonIndex]);

  const buttons = [
    {
      id: 1,
      position: { left: "450px", top: "430px" },
      description:
        "Surfers are athletes who ride ocean waves using a surfboard, requiring balance and skill.",
    },
    {
      id: 2,
      position: { left: "120px", top: "520px" },
      description:
        "Palm trees are tropical plants known for their long, slender trunks and large, fan-like leaves.",
    },
    {
      id: 3,
      position: { left: "750px", top: "470px" },
      description:
        "Oceans are large bodies of saltwater that cover about 71% of Earth's surface, vital for climate and biodiversity.",
    },
    {
      id: 4,
      position: { left: "920px", top: "500px" },
      description:
        "Sandstone is a sedimentary rock formed by compacted sand grains, often found in desert and beach environments.",
    },
    {
      id: 5,
      position: { left: "950px", top: "720px" },
      description:
        "Sand is a granular material composed of finely divided rock and mineral particles, commonly found on beaches.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Image
        src={"/90_mile_beach.jpg"}
        alt="beach"
        layout="fill"
        className="w-screen h-screen absolute -z-10"
      />
      {/* Motion component for zoom-in animation */}
      <motion.div
        initial="hidden"
        animate={isZoomed ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.2 }}
        className="w-screen h-screen absolute -z-10"
      >
        <Image
          src={"/beach1.jpg"}
          alt="beach1"
          layout="fill"
          className="w-screen h-screen absolute -z-10"
        />

        {buttons.map((button, index) => (
          <motion.div
            key={button.id}
            initial="hidden"
            animate={
              isZoomed && focusedButtonIndex === index ? "focused" : "visible"
            }
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={button.position}
          >
            {focusedButtonIndex != button.id - 1 && (
              <button
                onClick={() => handleCheckHereClick(index)}
                className="bg-blue-600 hover:bg-blue-700 duration-300 transition-all p-4 text-white rounded-full shadow-xl hover:shadow-2xl border-2 border-white absolute -z-[5]"
              >
                <FaRegHandPointRight size={24} color="white  " />
              </button>
            )}

            {focusedButtonIndex === index && (
              <div className="mt-4">
                <div className="bg-white bg-opacity-80 p-4 rounded shadow-lg w-[300px] text-sm absolute">
                  <p className="font-semibold">{button.description}</p>
                  <button
                    onClick={handleExitClick}
                    className=" hover:opacity-75 text-white bg-blue-600 text-md font-bold py-2 px-3 rounded mt-4 mr-auto gap-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {!isZoomed && (
        <div>
          <h1 className="text-center text-white text-4xl drop-shadow-lg font-bold mt-[260px] mb-6">
            What is a Beach?
          </h1>
          <div className="flex flex-col items-center justify-center text-lg max-w-[750px] mx-auto bg-white bg-opacity-65 px-12 py-10 rounded-xl shadow-lg">
            <p>
              A beach is a part of Earth land that is made of very small things.{" "}
              <br></br>
              <br></br> These things include rock, sand, and gravel. You can
              also find shells on the beach, which can come from many{" "}
              <strong className="hover:text-red-600 cursor-pointer transition-all duration-300">
                marine animals.
              </strong>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleExploreClick} // Add click handler
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded mt-6"
            >
              Explore the Beach
            </button>
          </div>
        </div>
      )}

      {showButton && (
        <button
          style={{
            background:
              "linear-gradient(162deg, rgba(253,234,76,1) 13%, rgba(0,212,255,1) 100%)",
          }}
          className="absolute right-10 bottom-10 text-xl px-6 py-4 rounded-full shadow-2xl font-bold transition-all duration-300 hover:bg-green-800 hover:text-white hover:scale-[102%]"
          onClick={() => router.push("/quiz")}
        >
          Take the Quiz
        </button>
      )}
      <audio ref={backgroundAudioRef} preload="auto" loop>
        <source src="/Audio/sea_sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef} preload="auto">
        <source src="/Audio/surfer_recording.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TitlePage;
