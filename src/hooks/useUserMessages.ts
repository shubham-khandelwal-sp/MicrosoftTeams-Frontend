import { useQuery } from "./useQuery";
import {UserMessagesResType} from "../types/Types"
import { fetchApi } from "../constants/constants";

type UserMessages = {
   userMessages: UserMessagesResType ,
   loading: boolean,
   error: Error | undefined
}

/*
 Append query to the fun name
*/
export const useUserMessages = (userId: string): UserMessages => {
    const shouldSkip = !userId
    const { data: userMessages, loading, error }  = useQuery(fetchApi,`http://localhost:4001/getUserMessages/${userId}`, shouldSkip)
    return {userMessages,loading,error}
}