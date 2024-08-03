import Image from "next/image";
import styles from "./page.module.css";
import GoogleMap from "@/components/GoogleMap";
import AnimalCard from "@/components/AnimalCard";
import AnimalCard from "../components/AnimalCard";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Image
        src="/tui.jpg"
        alt="Next.js Logo"
        layout="fill"
        priority
        className="w-screen h-screen"
      />
      <AnimalCard></AnimalCard>
    </main>
  );
}
