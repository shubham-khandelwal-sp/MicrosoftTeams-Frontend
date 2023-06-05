//libs
import { useState } from "react";

//components
import {
  AiOutlineVideoCameraAdd,
  AiOutlineSend,
  AiOutlineExclamation,
} from "react-icons/ai";
import {
  MdTextFormat,
  MdCelebration,
  MdOutlineLoop,
  MdOutlineGifBox,
  MdApproval,
} from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { ImAttachment } from "react-icons/im";
import { IoIosMore } from "react-icons/io";
import { BsCalendar2Plus, BsCameraReels } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";

type NewMessageProps = {
  onSendMessage: (message: string) => void;
};
export const NewMessage = ({ onSendMessage }: NewMessageProps) => {
  const [currMessage, setCurrMessage] = useState("");
  function sendMessage() {
    if (currMessage.length === 0) {
      return;
    }
    onSendMessage(currMessage);
    setCurrMessage("");
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
};
