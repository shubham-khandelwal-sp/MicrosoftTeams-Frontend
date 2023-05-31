//libs
import { useCallback } from "react";

//hooks
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";

//types
import { Action, ChatMessageType } from "../types/types";

//constants
import { ACTION , fetchApi } from "../constants/constants"

export const useAddMessage = (userId: string) => {
  const isValidUrl = !(userId)
  const { data, loading, error, updateQuery } = useQuery(
    fetchApi,
    `http://localhost:4001/getUserMessages/${userId}`,
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
