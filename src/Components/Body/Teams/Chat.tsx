import ChatLeftFold from "./LeftFold";
import ChatRightFold from "./RightFold";
import "./style.css";
import { ChatListData } from "../../../Data/ChatData";
import { useState } from "react";
import {ChatListDataType} from "../../../Types/types"
export default function Teams() {
  const [chatList, setChatList] = useState<ChatListDataType[]>(ChatListData);
  const [selectedChat, setSelectedChat] = useState<number>(0);

  return (
    <div className="chat">
      <div className="chat-left">
        <ChatLeftFold
          chatList={chatList}
          selectedChat={selectedChat}
          changeSelectedChat={(num: number) => setSelectedChat(num)}
        />
      </div>
      <div className="chat-right">
        <ChatRightFold chatData={chatList[selectedChat]} />
      </div>
    </div>
  );
}
