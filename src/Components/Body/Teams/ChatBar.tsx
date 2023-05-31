import { CgProfile } from "react-icons/cg";
import { ChatListDataType } from "../../../types/Types";
type ChatBarProps = {
  chatData: ChatListDataType;
  isActive: boolean;
  changeSelectedChat: (num: number) => void
}
export default function ChatBar({ chatData, isActive, changeSelectedChat }: ChatBarProps) {
  const classList = "chatbar" + (isActive ? " chatbar-active" : "");
  return (
    <div className={classList} onClick={() => changeSelectedChat(chatData.id)}>
      <div className="chatbar-icon">
        <CgProfile className="chatter-cg-profile" />
      </div>
      <div className="chatbar-details">
        <div className="chatbar-header">
          <div className="chatbar-name">{chatData.name}</div>
          <div className="chatbar-date">{chatData.lastModified}</div>
        </div>
        <div className="chatbar-text">{chatData.lastMessage}</div>
      </div>
    </div>
  );
}
