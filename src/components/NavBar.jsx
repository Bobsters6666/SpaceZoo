'use client';
import { useRouter } from "next/navigation";
import Tooltip from "./ToolTip";
import { FaBookAtlas } from "react-icons/fa6";
import { RiUser5Line } from "react-icons/ri";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import { MdOutlineBook } from "react-icons/md";

import { GiSpellBook } from "react-icons/gi";
import Link from "next/link";


const NavBar = () => {
   
    return (
    <div className="z-50 absolute flex flex-row justify-end items-center gap-[1rem] pt-[1rem] pb-[1rem] pr-[3rem] bg-transparent min-w-full ">
        <Link href="/profile"><Avatar src="/avatar.jpg" sx={{ width: 45, height: 45 }}/></Link>
         <Avatar sx={{ bgcolor: '#f5f4f0', width: 45, height: 45 }}> < GiSpellBook size="25" className="text-[#dfb644]"/></Avatar>
    </div>
    )

};

export default NavBar;