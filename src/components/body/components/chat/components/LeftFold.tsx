//libs
import { useCallback } from "react";

// components
import { MdOutlineExpandMore } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { RiChatNewLine } from "react-icons/ri";
import { RxTriangleDown, RxTriangleRight } from "react-icons/rx";
import { ChatBar } from "./ChatBar";

//hooks
import { useToggleVisibility } from "../hooks/useToggleVisibility";

// types
import { ChatListDataType } from "../types/types";

type CollapsibleProp = {
  className: string;
  title: string;
  children: JSX.Element;
};

const Collapsible = ({ className, title, children }: CollapsibleProp) => {
  const { state: showChat, handleToggle } = useToggleVisibility(true);
  return (
    <div className={className}>
      <div className="chatpinheader" onClick={handleToggle}>
        {showChat ? <RxTriangleDown /> : <RxTriangleRight />}
        <small> {title} </small>
      </div>
      {showChat && children}
    </div>
  );
};

type ChatLeftFoldProps = {
  chatList: ChatListDataType[] | undefined;
  selectedChat: number | undefined;
  changeSelectedChat: (num: number) => void;
};

export const ChatLeftFold = ({
  chatList,
  selectedChat,
  changeSelectedChat,
}: ChatLeftFoldProps) => {
  return (
    <div className="chatLeftFold">
      <div className="chatListHeader">
        <div className="listHeaderLeft">
          <h2> Chat </h2>
          <MdOutlineExpandMore />
        </div>
        <div className="listHeaderRight">
          <IoFilterOutline />
          <RiChatNewLine />
        </div>
      </div>
      <div className="chat-total">
        <Collapsible className="chatPinned" title="Pinned">
          <div>
            {
              <ChatBar
                key={chatList?.[0].id}
                isActive={chatList?.[0].id === selectedChat}
                chatData={chatList?.[0]}
                onClick={changeSelectedChat}
              />
            }
          </div>
        </Collapsible>
        <Collapsible className="chatList" title="Recent">
          <div>
            {chatList?.map((chatData) => {
              return (
                <ChatBar
                  key={chatData.id}
                  isActive={chatData.id === selectedChat}
                  chatData={chatData}
                  onClick={changeSelectedChat}
                />
              );
            })}
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
