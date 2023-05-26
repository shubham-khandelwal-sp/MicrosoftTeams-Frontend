import { useQuery } from "./useQuery";
import {UserMessagesResType} from "../Types/types"
import { fetchApi,getUserMessagesUrl } from "../Constants/constants";

type UserMessages = {
   userMessages: UserMessagesResType ,
   loading: boolean,
   error: Error | undefined
}

export const useUserMessages = (userId: string): UserMessages => {
    const shouldSkip = !userId
    const { data: userMessages, loading, error }  = useQuery(fetchApi,getUserMessagesUrl(userId), shouldSkip)
    return {userMessages,loading,error}
}