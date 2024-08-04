"use client";
import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#030c1c",
              },
            },
            fullScreen: {
              zIndex: 1,
            },
            particles: {
              color: {
                value: ["#FFFFFF", "#f7f7f7", "#174f8d"],
              },

              move: {
                direction: "bottom",
                enable: true,
                outModes: {
                  default: "out",
                },
                size: true,
                speed: {
                  min: 1,
                  max: 3,
                },
              },
              number: {
                value: 500,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: 1,
                animation: {
                  enable: false,
                  startValue: "max",
                  destroy: "min",
                  speed: 0.3,
                  sync: true,
                },
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                direction: "random",
                move: true,
                animation: {
                  enable: true,
                  speed: 60,
                },
              },
              tilt: {
                direction: "random",
                enable: true,
                move: true,
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 60,
                },
              },
              shape: {
                type: ["circle", "triangle", "polygon"],
                options: {
                  polygon: [
                    {
                      sides: 5,
                    },
                    {
                      sides: 6,
                    },
                  ],
                },
              },
              size: {
                value: {
                  min: 2,
                  max: 4,
                },
              },
              roll: {
                darken: {
                  enable: true,
                  value: 30,
                },
                enlighten: {
                  enable: true,
                  value: 30,
                },
                enable: true,
                speed: {
                  min: 15,
                  max: 25,
                },
              },
              wobble: {
                distance: 30,
                enable: true,
                move: true,
                speed: {
                  min: -15,
                  max: 15,
                },
              },
            },
          }}
        />
      )}
    </>
  );
}

export default ParticlesComponent;
