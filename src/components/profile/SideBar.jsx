'use client';
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
const SideBar = () => {
    const [ isCollapsed, setIsCollapsed ] = useState(false);
    console.log(isCollapsed)
    const regionLinks = [
        {title: "Africa", link: "/profile/Africa"},
        {title: "Antarctica", link: "/profile/Antarctica"},
        {title: "South America", link: "/profile/South America"},
        {title: "Asia", link: "/profile/Asia"},
        {title: "Europe", link: "/profile/Europe"},
        {title: "America", link: "/profile/America"},
        {title: "Oceania", link: "/profile/Oceania"},
     
    ]

    return (
        <div className="flex flex-col gap-[1rem] p-[2rem] border-r-[0.2] border-gray-500 font-medium">
            <Link href="/profile">Profile</Link>
            <div className="flex flex-row items-center justify-between gap-[1rem]">
                <p>Collections</p>
                <button className="p-[0.5rem] text-gray-500 hover:text-black transition-all duration-300 " onClick={() => setIsCollapsed(!isCollapsed)}>{isCollapsed ? <FaChevronDown size="15" /> : <FaChevronUp size="15" />}</button>
                
                
            </div>
            {!isCollapsed && (
                    <div className="flex flex-col gap-[2rem]" >
                        {regionLinks.map(link => 
                            (
                                <Link key={link.title} href={link.link}><p>{link.title}</p></Link>
                            )
                        )}
                    </div>
                )}
        </div>

    )
}

export default SideBar;