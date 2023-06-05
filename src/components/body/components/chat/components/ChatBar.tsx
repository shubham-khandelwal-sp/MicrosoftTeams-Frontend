//components
import { ChatAvatar } from "./ChatAvatar";

//types
import { ChatListDataType } from "../types/types";

type ChatBarProps = {
  chatData: ChatListDataType | undefined;
  isActive: boolean;
  onClick: (num: number) => void;
};
export const ChatBar = ({ chatData, isActive, onClick }: ChatBarProps) => {
  const classList = "chatbar" + (isActive ? " chatbar-active" : "");

  const handleClick = () => {
    if (chatData?.id) {
      onClick(chatData.id);
    }
  };

  return (
    <div className={classList} onClick={handleClick}>
      <div className="chatbar-icon">
        <ChatAvatar name={chatData?.name} id={chatData?.id} />
      </div>
      <div className="chatbar-details">
        <div className="chatbar-header">
          <div className="chatbar-name">{chatData?.name}</div>
          <div className="chatbar-date">{chatData?.lastModified}</div>
        </div>
        <div className="chatbar-text">{chatData?.lastMessage}</div>
      </div>
    </div>
  );
};
