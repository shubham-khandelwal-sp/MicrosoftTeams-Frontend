export type ChatListDataType = {
  id: number;
  name: string;
  lastMessage: string;
  lastModified: string;
};

export type ChatMessageType = {
  id: number;
  sender: number;
  message: string;
  timing: string;
};

export type UserMessagesResType = {
  id?: string | undefined;
  messages: ChatMessageType[];
};

export type Action = {
  type: string;
  newMessage: ChatMessageType;
};

export type AvatarInfo = {
  background: string;
  text: string;
};
