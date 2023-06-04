//hooks
import { useQuery } from "./useQuery";

//types
import { ChatListDataType } from "../types/types";
import { QueryResult } from "./useQuery";

//constants
import { fetchApi } from "../constants/constants";

export const useUsersQuery = (): QueryResult<ChatListDataType[]> => {
  const { data, loading, error, updateQuery } = useQuery<ChatListDataType[]>(
    fetchApi,
    `http://localhost:4001/getAllUsers`,
    false
  );
  return { data, loading, error, updateQuery };
};
