"use client";

import Tooltip from "../Tooltip/ToolTip";
import { Avatar } from "@mui/material";
import { GiSpellBook, GiSwordClash } from "react-icons/gi";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="z-50 absolute flex flex-row justify-end items-center gap-[1rem] pt-[1rem] pb-[1rem] pr-[3rem] bg-transparent min-w-full ">
      <Link href={"/"} shallow>
        <Tooltip label="Learn">
          <Avatar
            sx={{
              background:
                "linear-gradient(0deg, rgba(250,250,250,1) 20%, rgba(0,0,0,1) 44%)",
              width: 45,
              height: 45,
            }}
          >
            <GiSpellBook size="25" className="text-[#ffdf78]" />
          </Avatar>
        </Tooltip>
      </Link>
      <Link href={"/duel"} shallow>
        <Tooltip label="Play">
          <Avatar
            sx={{
              background:
                "linear-gradient(0deg, rgba(250,250,250,1) 20%, rgba(0,0,0,1) 44%)",
              width: 45,
              height: 45,
            }}
          >
            <GiSwordClash size="25" className="text-[#ffdf78]" />
          </Avatar>
        </Tooltip>
      </Link>
      <Link href="/profile" shallow>
        <Tooltip label="Profile">
          <Avatar src="/avatar.jpg" sx={{ width: 45, height: 45 }} />
        </Tooltip>
      </Link>
    </div>
  );
};

export default NavBar;
