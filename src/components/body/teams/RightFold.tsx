import { CgProfile } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { FiVideo, FiLogOut } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import { getRandomChat } from "../../../data/ChatData";
import Chatter from "./Chatter";
import NewMessage from "./NewMessage";
import { useState } from "react";
import { ChatMessageType,ChatListDataType } from "../../../types/Types";

function getCurrTime():string {
  function convertToTwoLetters(val:number): string {
    const value = val.toString();
    return value.length === 2 ? value : "0" + value;
  }
  const currTime = new Date();

  const timing: string = `${convertToTwoLetters(
    currTime.getDate()
  )}/${convertToTwoLetters(currTime.getMonth())}  ${convertToTwoLetters(
    currTime.getHours()
  )}:${convertToTwoLetters(currTime.getMinutes())}`;

  return timing;
}

type ChatRightFoldProp= {
  chatData: ChatListDataType
}

export default function ChatRightFold({ chatData }: ChatRightFoldProp) {
  const [messagesData, setMessagesData] = useState(getRandomChat(30));

  function handleSendMessage(message: string) {
    const messageObj: ChatMessageType = {
      id: messagesData[messagesData.length - 1].id + 1,
      sender: 0,
      message: message,
      timing: getCurrTime()
    };
    setMessagesData([...messagesData, messageObj]);
  }
  return (
    <div className="chatRightFold">
      <div className="chatinfo-header">
        <div className="chatinfo-header-left">
          <CgProfile className="right-profile" />
          <h2> {chatData.name} </h2>
          <span> Chat </span>
          <span> Files </span>
          <span> Organisation </span>
          <span> Activity </span>
          <span> Linkedin </span>
          <BsPlusLg />
        </div>
        <div className="chatinfo-header-right">
          <div className="chatinfo-left-cons">
            <FiVideo className="callIcon" />
            <IoCallOutline className="callIcon" />
          </div>
          <div className="chatInfo-right-cons">
            <RiFolderUploadLine className="addIcon" />
            <AiOutlineUsergroupAdd className="addIcon" />
            <FiLogOut className="addIcon" />
          </div>
        </div>
      </div>
      <div className="chatinfo-body">
        <div className="chatter">
          <Chatter messages={messagesData} chatData={chatData} />
        </div>
        <div className="new-message">
          <NewMessage handleSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
