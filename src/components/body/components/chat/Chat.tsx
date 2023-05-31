//libs
import { useState,useCallback } from "react";

//components
import { ChatLeftFold } from "./components/LeftFold";
import { ChatRightFold } from "./components/RightFold";
import { Spinner } from "../../../spinner/Spinner"; 
import { ErrorState } from "../../../error/ErrorState";

//hooks
import {useUsersQuery} from './hooks/useUsersQuery'

//types
import { ChatMessageType, ChatListDataType } from "./types/types";

//constants

//styles
import "./style.css";

export const Chat = () => {
  const {allUserDetails: chatList,loading,error, updateQuery} = useUsersQuery()
  const [selectedChat, setSelectedChat] = useState<number | undefined>(undefined);

  const handleNewMessage = useCallback((newMessageObj: ChatMessageType) =>{
    if(!selectedChat) return
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
  },[selectedChat,chatList])

  if(loading) return < Spinner color='#000000' size={100} />
  if(error)  return < ErrorState err={error} />

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
        { selectedChat
         ? <ChatRightFold chatData={chatList?.[selectedChat]} onNewMessage={handleNewMessage} /> 
         : <div className="chatRightFold"></div>}
      </div>
    </div>
  );
}
