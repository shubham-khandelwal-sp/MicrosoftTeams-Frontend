//types
import { SideBarOption } from "./types/types";

type SideBarOptionType = {
  option: SideBarOption;
  isActive: boolean;
  handlePageClick: (selectedPage: string) => void;
};
export const SidebarOption = ({
  option,
  isActive,
  handlePageClick,
}: SideBarOptionType) => {
  const classList = "sidebar-option" + (isActive ? " active" : "");
  return (
    <div className={classList} onClick={() => handlePageClick(option.name)}>
      <div className="sidebar-icon">{option.icon}</div>
      <div>
        {option.name && <label className="sidebar-label">{option.name}</label>}
      </div>
    </div>
  );
};
