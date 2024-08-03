"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathName = usePathname();

  const regionLinks = [
    { title: "Africa", link: "/profile/africa" },
    { title: "Antarctica", link: "/profile/antarctica" },
    { title: "South America", link: "/profile/south-america" },
    { title: "Asia", link: "/profile/asia" },
    { title: "Europe", link: "/profile/europe" },
    { title: "America", link: "/profile/america" },
    { title: "Oceania", link: "/profile/oceania" },
  ];

  const isProfilePage = pathName.split("/").pop() === "profile";

  return (
    <div className="flex flex-col text-lg gap-[1rem] p-[2rem] border-r-[0.2] border-gray-500 font-medium min-w-[15rem]">
      <Link
        href="/profile"
        shallow
        className={`hover:text-[#84c4f5] hover:scale-105 transition-all duration-300 ${
          isProfilePage ? "text-[#84c4f5]" : ""
        }`}
      >
        Profile
      </Link>
      <div className="flex flex-row items-center justify-between gap-[1rem]">
        <p>Collections</p>
        <button
          className="p-[0.5rem] text-gray-200 hover:text-gray-500 transition-all duration-300 "
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <FaChevronDown size="15" />
          ) : (
            <FaChevronUp size="15" />
          )}
        </button>
      </div>
      <div className="pl-[0.8rem]">
        {!isCollapsed && (
          <div className="flex flex-col gap-[1rem]">
            {regionLinks.map((link) => (
              <Link key={link.title} href={link.link} shallow>
                <p
                  className={`hover:text-[#84c4f5] hover:scale-105 transition-all duration-300 ${
                    pathName.includes(link.link) ? "text-[#84c4f5]" : ""
                  }`}
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
