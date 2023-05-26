import "./style.css";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { TfiMore } from "react-icons/tfi";
export default function Header() {
  return (
    <div className="header">
      <div className="header-menu"></div>
      <div className="header-leftFold">
        <AiOutlineLeft />
        <AiOutlineRight />
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <AiOutlineSearch />
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <TfiMore className="more-item-icon" />
          <img src={require("../../icons/AvatarIcon.png")} alt="Avatar" className="header-avatar" />
        </div>
      </div>
    </div>
  );
}
