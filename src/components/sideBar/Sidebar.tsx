//components
import {SidebarOption} from "./SidebarOption";

//types
import { SideBarOption } from "./types/types";

//constants
import { TopSidebar, BottomSidebar } from "./constants/constants";

//styles
import "./styles.css";

type SidebarProps = {
  activePage : string;
  handlePageClick: (selectedPage: string) => void;
}

export const  Sidebar = ({ activePage, handlePageClick} : SidebarProps) => {
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
