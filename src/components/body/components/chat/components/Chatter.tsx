// Libs
import { useRef, useEffect } from "react";

// Components
import { ChatAvatar } from "./ChatAvatar";

// Types
import { ChatMessageType, ChatListDataType } from "../types/types";

type IncomingMessageProp = {
  indMessage: ChatMessageType;
  chatData: ChatListDataType | undefined;
};
type OutgoingMessageProp = {
  indMessage: ChatMessageType;
};
type ChatterProp = {
  messages: ChatMessageType[] | undefined;
  chatData: ChatListDataType | undefined;
};

function OutgoingMessage({ indMessage }: OutgoingMessageProp) {
  return (
    <div className="outgoing-message">
      <div className="outgoing-comp-message">
        <div className="outgoing-header">
          <span className="chatdata-timing"> {indMessage.timing} </span>
        </div>
        <div className="chatter-message-content">
          <span className="chatdata-text-content"> {indMessage.message} </span>
        </div>
      </div>
    </div>
  );
}

function IncomingMessage({ indMessage, chatData }: IncomingMessageProp) {
  return (
    <div className="incoming-message">
      <div className="incoming-left">
        <div className="incoming-icon">
          <ChatAvatar name={chatData?.name} id={chatData?.id} />
        </div>
      </div>
      <div className="incoming-right">
        <div className="incoming-header">
          <span className="chatdata-name"> {chatData?.name} </span>
          <span className="chatdata-timing"> {indMessage?.timing} </span>
        </div>
        <div className="chatter-message-content">
          <span className="chatdata-text-content"> {indMessage.message} </span>
        </div>
      </div>
    </div>
  );
}

export const Chatter = ({ messages, chatData }: ChatterProp) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chatter-messages">
      {messages?.map((indMessage) => {
        return indMessage.sender ? (
          <IncomingMessage
            key={indMessage.id}
            indMessage={indMessage}
            chatData={chatData}
          />
        ) : (
          <OutgoingMessage key={indMessage.id} indMessage={indMessage} />
        );
      })}
      <div ref={lastMessageRef} />
    </div>
  );
};
