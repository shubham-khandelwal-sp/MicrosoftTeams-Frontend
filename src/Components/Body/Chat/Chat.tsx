import ChatLeftFold from "./LeftFold";
import ChatRightFold from "./RightFold";
import "./style.css";
import { ChatListData } from "../../../Data/ChatData";
import { useState } from "react";
import {useAllUsers} from '../../../hooks/useAllUsers'
import {Spinner} from '../../Spinner/Spinner'
import { ErrorState } from "../../Error/ErrorState";
export default function Chat() {
  const {allUserDetails: chatList,loading,error} = useAllUsers()
  const [selectedChat, setSelectedChat] = useState<number>(0);

  if(loading) return < Spinner color='#000000' size={100} />
  if(error)  return < ErrorState />

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
        <ChatRightFold chatData={chatList?.[selectedChat]} />
      </div>
    </div>
  );
}
