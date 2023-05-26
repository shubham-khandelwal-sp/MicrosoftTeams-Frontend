import { useQuery } from "./useQuery";
import {ChatListDataType} from "../Types/types"
import { fetchApi,getAllUsersUrl } from "../Constants/constants";

type AllUsers = {
   allUserDetails: ChatListDataType[],
   loading: boolean,
   error: Error | undefined
}

export const useAllUsers = (): AllUsers => {
    const { data: allUserDetails, loading, error }  = useQuery(fetchApi,getAllUsersUrl,false)
    return {allUserDetails,loading,error}
}