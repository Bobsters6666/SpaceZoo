import Image from "next/image";
import AnimalCard from "@/components/AnimalCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/tui.jpg"
        alt="Next.js Logo"
        layout="fill"
        priority
        className="w-screen h-screen"
      />
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
    </main>
  );
}
  );
}
