import Image from "next/image";
import AnimalCard from "../components/AnimalCard";

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
      <AnimalCard />
    </main>
  );
}
