import {
  AiOutlineVideoCameraAdd,
  AiOutlineSend,
  AiOutlineExclamation,
} from "react-icons/ai";
import { MdTextFormat, MdCelebration } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { ImAttachment } from "react-icons/im";
import { MdOutlineLoop, MdOutlineGifBox, MdApproval } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { BsCalendar2Plus, BsCameraReels } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { useState } from "react";

type NewMessageProps = {
  handleSendMessage: (message: string) => void;
};
export default function NewMessage({ handleSendMessage }: NewMessageProps) {
  const [currMessage, setCurrMessage] = useState("");
  function sendMessage() {
    if (currMessage.length === 0) {
      return;
    }
    handleSendMessage(currMessage);
    setCurrMessage("");
  }
  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      sendMessage();
    }
  };
  return (
    <div className="message-compose">
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a new message"
          value={currMessage}
          className="message-input-text"
          onChange={(event) => setCurrMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="message-option-icons">
        <div className="message-option-icon-left">
          <MdTextFormat className="message-icon" />
          <AiOutlineExclamation className="message-icon" />
          <ImAttachment className="message-icon" />
          <MdOutlineLoop className="message-icon" />
          <GrEmoji className="message-icon" />
          <MdOutlineGifBox className="message-icon" />
          <BsCalendar2Plus className="message-icon" />
          <BsCameraReels className="message-icon" />
          <MdCelebration className="message-icon" />
          <BiRightTopArrowCircle className="message-icon" />
          <MdApproval className="message-icon" />
          <SiSololearn className="message-icon" />
          <GiNotebook className="message-icon" />
          <IoIosMore className="message-icon" />
        </div>
        <div className="message-option-icon-right">
          <AiOutlineVideoCameraAdd className="message-icon" />
          <AiOutlineSend
            className="message-icon"
            onClick={() => sendMessage()}
          />
        </div>
      </div>
    </div>
  );
}
