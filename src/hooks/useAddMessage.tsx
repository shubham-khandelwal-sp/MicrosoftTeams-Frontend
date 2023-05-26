import { useCallback } from "react";
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";
import { Action, ChatMessageType } from "../Types/types";
import { ACTION, STATUS , fetchApi, getUserMessagesUrl } from "../Constants/constants";

export const useAddMessage = (userId: string) => {
  const isValidUrl = !(userId)
  const { data, loading, error, updateQuery } = useQuery(
    fetchApi,
    getUserMessagesUrl(userId),
    isValidUrl
  );

  const onSuccess = useCallback(
    (newMessage: ChatMessageType) => {
      const newData = {
        ...data,
        messages: [...data.messages , newMessage]
      };
      updateQuery(newData);
    },
    [data, updateQuery]
  );

  const { mutate, status } = useMutation<ChatMessageType>(
    `http://localhost:4001/addMessage/${data?.id}`,
    { onSuccess }
  );
  const handleAddMessage = useCallback(
    async (newMessage: ChatMessageType) => {
      await mutate(newMessage);
      if (status === STATUS.ERROR) {
        console.error("can't add data");
      }
    },
    [mutate, status]
  );

  const onAction = useCallback(
    (action: Action) => {
      switch (action.type) {
        case ACTION.ADD_MESSAGE:
          handleAddMessage(action.newMessage);
          break;

        default:
          throw new Error("ACTION NOT INCLUDED:");
      }
    },
    [handleAddMessage]
  );

  return {data, onAction, loading, error };
};
