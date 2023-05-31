//libs
import { useState,useCallback } from "react";

//components
import { ChatLeftFold } from "./LeftFold";
import { ChatRightFold } from "./RightFold";
import { Spinner } from "../../.spinner/Spinner";
import { ErrorState } from "../../error/ErrorState";

//hooks
import {useUsersQuery} from '../../../hooks/useUsersQuery'

//types
import { ChatMessageType, ChatListDataType } from "../../../types/Types";

//constants

//styles
import "./style.css";

export const Chat = () => {
  const {allUserDetails: chatList,loading,error, updateQuery} = useUsersQuery()
  const [selectedChat, setSelectedChat] = useState<number>(0);

  if(loading) return < Spinner color='#000000' size={100} />
  if(error)  return < ErrorState />


  const  handleNewMessage = (newMessageObj: ChatMessageType) =>{
       const newUserChat: ChatListDataType = {
        id: chatList[selectedChat].id,
        name: chatList[selectedChat].name,
        lastMessage: (newMessageObj.sender ? "" :"You: ") + newMessageObj.message,
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
        <ChatRightFold chatData={chatList?.[selectedChat]} onNewMessage={handleNewMessage} />
      </div>
    </div>
  );
}
