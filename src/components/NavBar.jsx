import Tooltip from "./ToolTip";
import { FaBookAtlas } from "react-icons/fa6";
import { RiUser5Line } from "react-icons/ri";

const NavBar = () => {
    return (
    <div className="flex flex-row justify-end gap-10 pt-[2rem] pb-[2rem] pl-[2rem] pr-[4rem] bg-transparent absolute min-w-full">
        <Tooltip label="Profile"><RiUser5Line  size="28" /></Tooltip>
        <Tooltip label="Learning Modules"><FaBookAtlas size="25" /></Tooltip>
    </div>
    )

};

export default NavBar;