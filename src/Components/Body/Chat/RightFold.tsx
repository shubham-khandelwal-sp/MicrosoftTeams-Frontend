import { CgProfile } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { FiVideo, FiLogOut } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import Chatter from "./Chatter";
import NewMessage from "./NewMessage";
import { ChatMessageType,ChatListDataType } from "../../../Types/types";
import { Spinner } from "../../Spinner/Spinner";
import { ErrorState } from "../../Error/ErrorState";
import { useAddMessage } from "../../../hooks/useAddMessage";
import { ACTION } from "../../../Constants/constants";
import { ChatAvatar } from "./ChatAvatar";

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
  chatData: ChatListDataType;
  handleNewMessage: (messageObj: ChatMessageType) => void
}

export default function ChatRightFold({ chatData, handleNewMessage }: ChatRightFoldProp) {

  const {
    data,
    onAction,
    loading,
    error,
  } = useAddMessage(chatData?.id?.toString());

  const messagesData = data?.messages
  function handleSendMessage(message: string) {
    const messageObj: ChatMessageType = {
      id: messagesData[messagesData.length - 1].id + 1,
      sender: 0,
      message: message,
      timing: getCurrTime()
    };
    onAction({
      type: ACTION.ADD_MESSAGE,
      newMessage : messageObj
    })
    handleNewMessage(messageObj)
  }

  if(loading) return < Spinner color='#000000' size={100} />
  if(error)  return < ErrorState />

  return (
    <div className="chatRightFold">
      <div className="chatinfo-header">
        <div className="chatinfo-header-left">
        <ChatAvatar name={chatData?.name} id={chatData?.id} />
          <h2> {chatData?.name} </h2>
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
