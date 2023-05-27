import ChatLeftFold from "./LeftFold";
import ChatRightFold from "./RightFold";
import "./style.css";
import { ChatListData } from "../../../Data/ChatData";
import { useState } from "react";
import {useAllUsers} from '../../../hooks/useAllUsers'
import {Spinner} from '../../Spinner/Spinner'
import { ErrorState } from "../../Error/ErrorState";
import { ChatMessageType, ChatListDataType } from "../../../Types/types";
export default function Chat() {
  const {allUserDetails: chatList,loading,error, updateQuery} = useAllUsers()
  console.log(chatList)
  const [selectedChat, setSelectedChat] = useState<number>(0);

  if(loading) return < Spinner color='#000000' size={100} />
  if(error)  return < ErrorState />

  function handleNewMessage(newMessageObj: ChatMessageType){
       const newUserChat: ChatListDataType = {
        id: chatList[selectedChat].id,
        name: chatList[selectedChat].name,
        lastMessage: newMessageObj.message,
        lastModified: newMessageObj.timing
       }
       const newChatList = chatList.map((chat)=>{
        if(chat.id === chatList[selectedChat].id) return newUserChat;
        return chat
       })
       updateQuery(newChatList)
  }

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
        <ChatRightFold chatData={chatList?.[selectedChat]} handleNewMessage={handleNewMessage} />
      </div>
    </div>
  );
}
