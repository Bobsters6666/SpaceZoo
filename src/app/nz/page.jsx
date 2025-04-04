"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./nz.module.css";
import { Button, Dialog, Typography, Grid, Box } from "@mui/material";

export default function page() {
  const [open, setOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);

  const handleOpen = (data) => {
    setCurrentModalData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentModalData(null);
  };
  const modalData = [
    {
      title: "Geography",
      image: "/NZBeach.jpg",
      description:
        "New Zealand is a mountainous island nation with diverse landscapes, ranging from volcanic plateaus to snow-capped peaks and stunning coastlines. Its geographic isolation has created a unique ecosystem rich in native flora and fauna.",
      link: "/learn/Oceania/NZ/lesson_1",
    },
    {
      title: "Culture",
      image: "/NZCulture.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/nz/lesson2",
    },
    {
      title: "Flora",
      image: "/fernTree.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/nz/lesson3",
    },
    {
      title: "Fauna",
      image: "/NZKiwi.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/nz/lesson4",
    },
  ];
  return (
    <div className={styles.container}>
      <Image
        src="/nz.jpg"
        alt="New Zealand"
        layout="fill"
        priority
        className="w-screen h-screen -z-10 absolute"
      />

      <img src="/path.png" alt="path" className={styles.path} />

      <img src="/pin.png" alt="start" className={styles.start} />

      {modalData.map((data, index) => (
        <img
          key={index}
          src="/shuttle.png"
          alt="shuttle"
          className={styles[`shuttle${index + 1}`]}
          onClick={() => handleOpen(data)}
        />
      ))}

      <img src="/flag.png" alt="finish" className={styles.finish} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth="md"
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        {currentModalData && (
          <Box p={3}>
            <Typography align="center" variant="h3" pb={4}>
              {currentModalData.title}
            </Typography>
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} sm={6}>
                <img
                  src={currentModalData.image}
                  alt={currentModalData.title}
                  className={styles.modalImage}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>{currentModalData.description}</Typography>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Link href={currentModalData.link} shallow>
                <Button variant="contained">
                  Learn{" "}
                  <img src="/doubleArrows.png" alt="arrows" width="20px" />
                </Button>
              </Link>
            </Box>
          </Box>
        )}
      </Dialog>
    </div>
  );
}
