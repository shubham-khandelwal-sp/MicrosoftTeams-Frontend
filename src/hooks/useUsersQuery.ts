//hooks
import { useQuery } from "./useQuery";

//types
import {ChatListDataType} from "../types/Types"
import { QueryResult } from "./useQuery";

//constants
import { fetchApi} from "../constants/constants";


export const useUsersQuery = (): QueryResult<ChatListDataType> => {
    const { data: allUserDetails, loading, error, updateQuery }  = useQuery(fetchApi,`http://localhost:4001/getAllUsers`,false)
    return {allUserDetails,loading,error,updateQuery}
}