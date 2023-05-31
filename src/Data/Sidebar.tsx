//components
import { IoHomeSharp, IoCallOutline } from "react-icons/io5";
import {
  AiOutlineBell,
  AiOutlineFile,
  AiOutlineAppstore
} from "react-icons/ai";
import { BsChatText, BsBoundingBox } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { TfiHelpAlt } from "react-icons/tfi";

//types
import { SideBarOption } from "../components/sideBar/Sidebar";


export const TopSidebar: SideBarOption[] = [
  {
    id: 1,
    name: "Home",
    icon: <IoHomeSharp />
  },
  {
    id: 2,
    name: "Activity",
    icon: <AiOutlineBell />
  },
  {
    id: 3,
    name: "Chat",
    icon: <BsChatText />
  },
  {
    id: 4,
    name: "Teams",
    icon: <FaUsers />
  },
  {
    id: 5,
    name: "Calls",
    icon: <IoCallOutline />
  },
  {
    id: 6,
    name: "Files",
    icon: <AiOutlineFile />
  },
  {
    id: 7,
    name: "Sprinklr Hub",
    icon: <BsBoundingBox />
  },
  {
    id: 8,
    name: "",
    icon: <FiMoreHorizontal />
  },
  {
    id: 9,
    name: "Apps",
    icon: <AiOutlineAppstore />
  }
];

export const BottomSidebar = [
  {
    id: 1,
    name: "Help",
    icon: <TfiHelpAlt />
  }
];
