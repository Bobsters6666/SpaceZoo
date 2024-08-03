"use client";
import { useRouter } from "next/navigation";
import Tooltip from "./ToolTip";
import { FaBookAtlas } from "react-icons/fa6";
import { RiUser5Line } from "react-icons/ri";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import { MdOutlineBook } from "react-icons/md";

import { GiSpellBook, GiSwordClash } from "react-icons/gi";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="z-50 absolute flex flex-row justify-end items-center gap-[1rem] pt-[1rem] pb-[1rem] pr-[3rem] bg-transparent min-w-full ">
      <Link href={"/"}>
        <Tooltip label="Learn">
          <Avatar sx={{ bgcolor: "#f5f4f0", width: 45, height: 45 }}>
            <GiSpellBook size="25" className="text-[#dfb644]" />
          </Avatar>
        </Tooltip>
      </Link>
      <Link href={"/duel"}>
        <Tooltip label="Duel">
          <Avatar sx={{ bgcolor: "#f5f4f0", width: 45, height: 45 }}>
            <GiSwordClash size="25" className="text-[#dfb644]" />
          </Avatar>
        </Tooltip>
      </Link>
      <Link href="/profile">
        <Tooltip label="Profile">
          <Avatar src="/avatar.jpg" sx={{ width: 45, height: 45 }} />
        </Tooltip>
      </Link>
    </div>
  );
};

export default NavBar;
