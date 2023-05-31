import { MdOutlineExpandMore } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { RiChatNewLine } from "react-icons/ri";
import { RxTriangleDown } from "react-icons/rx";
import ChatBar from "./ChatBar";
import { ChatListDataType } from "../types/types";
type ChatLeftFoldProps = {
  chatList: ChatListDataType[];
  selectedChat: number;
  changeSelectedChat: (num: number) => void
}
export default function ChatLeftFold({
  chatList,
  selectedChat,
  changeSelectedChat
}: ChatLeftFoldProps) {
  return (
    <div className="chatLeftFold">
      <div className="chatListHeader">
        <div className="listHeaderLeft">
          <h2> Teams </h2>
          <MdOutlineExpandMore />
        </div>
        <div className="listHeaderRight">
          <IoFilterOutline />
          <RiChatNewLine />
        </div>
      </div>
      <div className="chat-total">
        <div className="chatPinned">
          <div className="chatpinheader">
            <RxTriangleDown />
            <small> Pinned </small>
          </div>
          <div>
            <ChatBar
              key={chatList[0].id}
              isActive={chatList[0].id === selectedChat}
              chatData={chatList[0]}
              changeSelectedChat={changeSelectedChat}
            />
          </div>
        </div>
        <div className="chatList">
          <div className="chatpinheader">
            <RxTriangleDown />
            <small> Recent </small>
          </div>
          <div>
            {chatList.map((chatData) => {
              return (
                <ChatBar
                  key={chatData.id}
                  isActive={chatData.id === selectedChat}
                  chatData={chatData}
                  changeSelectedChat={changeSelectedChat}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
