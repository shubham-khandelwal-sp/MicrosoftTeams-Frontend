//components
import {SidebarOption} from "./SidebarOption";

//constants
import { TopSidebar, BottomSidebar } from "../../data/Sidebar";

//styles
import "./styles.css";

type SidebarProps = {
  activePage : string;
  handlePageClick: (selectedPage: string) => void;
}

export type SideBarOption ={
  id: number,
  name: string,
  icon: JSX.Element
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
