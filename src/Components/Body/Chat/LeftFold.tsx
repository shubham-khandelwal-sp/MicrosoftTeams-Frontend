//libs
import { useCallback } from "react";

// components
import { MdOutlineExpandMore } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { RiChatNewLine } from "react-icons/ri";
import { RxTriangleDown, RxTriangleRight } from "react-icons/rx";
import { ChatBar } from "./ChatBar";

//hooks
import { useToggleVisibility } from "../../../hooks/useToggleVisibility";

// types
import { ChatListDataType } from "../../../types/Types";

type CollapsibleProp = {
  className: string,
  title: string,
  showContent: boolean,
  onClick: () => void,
  children: JSX.Element
}

const Collapsible = ({className,title,showContent,onClick,children}: CollapsibleProp) =>{
    return (
      <div className={className}>
        <div className="chatpinheader" onClick={onClick}>
           {showContent?<RxTriangleDown />: <RxTriangleRight/>}
            <small> {title} </small>
        </div>
        {children}
      </div>
    )
}

type ChatLeftFoldProps = {
  chatList: ChatListDataType[];
  selectedChat: number;
  changeSelectedChat: (num: number) => void
}

export const ChatLeftFold = ({
  chatList,
  selectedChat,
  changeSelectedChat
}: ChatLeftFoldProps) => {
  const {state: showPinned,handleToggle: onPinnedToggle}= useToggleVisibility(true)
  const {state: showRecent,handleToggle: onRecentToggle}= useToggleVisibility(true)

  const handlePinnedClick = useCallback(()=>{
    onPinnedToggle(!showPinned)
  },[showPinned,onPinnedToggle])

  const handleRecentClick = useCallback(()=>{
    onRecentToggle(!showRecent)
  },[showRecent,onRecentToggle])

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
        < Collapsible className="chatPinned" title="Pinned" showContent={showPinned} onClick={handlePinnedClick}>
        <div>
            { showPinned &&
              <ChatBar
                key={chatList?.[0].id}
                isActive={chatList?.[0].id === selectedChat}
                chatData={chatList?.[0]}
                onClick={changeSelectedChat}
              />
           }
          </div>
        </Collapsible>
        < Collapsible className="chatList" title="Recent" showContent={showRecent} onClick={handleRecentClick}>
        <div>
          { showRecent && chatList?.map((chatData) => {
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
}
