import ProfileAnimalCard from "../../../components/profile/ProfileAnimalCard";
import profileAnimals from "../../../data/profileanimals";
import "../../../components/profile/ProfileAnimalCard.css";
import { DiDigitalOcean } from "react-icons/di";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className="flex flex-col gap-[2rem] w-full min-h-full pt-[1.5rem]">
      <div className="flex flex-row gap-[0.5rem] items-center">
        <p className="font-semibold text-2xl">Oceania</p>
        <DiDigitalOcean size="40" />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-[1.5rem] overflow-auto max-h-[550px]"
        style={{ overflowX: "hidden" }}
      >
        {profileAnimals.map((animal) => (
          <ProfileAnimalCard
            key={animal.name}
            animal={animal}
            locked={animal.locked}
          />
        ))}
      </div>
    </div>
  );
}
