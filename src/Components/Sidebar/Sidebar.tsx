import "./styles.css";
import { TopSidebar, BottomSidebar } from "../../Data/Sidebar";
import SidebarOption from "./SidebarOption";

type SidebarProps = {
  activePage : string;
  handlePageClick: (selectedPage: string) => void;
}
import {SideBarOption} from "../../Types/types"
export default function Sidebar({ activePage, handlePageClick} : SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {TopSidebar.map((option: SideBarOption) => {
          return (
            <SidebarOption
              key={option.id}
              option={option}
              isActive={activePage === option.name}
              handlePageClick={handlePageClick}
            />
          );
        })}
      </div>
      <div className="sidebar-bottom">
        {BottomSidebar.map((option: any) => {
          return (
            <SidebarOption
              key={option.id}
              option={option}
              isActive={activePage === option.name}
              handlePageClick={handlePageClick}
            />
          );
        })}
      </div>
    </div>
  );
}
