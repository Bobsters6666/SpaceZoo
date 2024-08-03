import React from "react";
import Image from "next/image";
import styles from "./nz.module.css";

export default function page() {
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
      <img src="/pin.png" alt="start"  className={styles.start}/>
      <img src="/shuttle.png" alt="shuttle" className={styles.shuttle}  />
      <img src="/shuttle.png" alt="shuttle" className={styles.shuttle} />
      <img src="/shuttle.png" alt="shuttle" className={styles.shuttle}/>
      <img src="/shuttle.png" alt="shuttle" className={styles.shuttle}/>
      <img src="/flag.png" alt="finish"  className={styles.finish}/>

    </div>
  );
}
