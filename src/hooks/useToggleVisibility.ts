//libs
import { useState, useCallback } from "react";

export const useToggleVisibility = (initialState: boolean) => {
    const [state,setState] = useState<boolean>(initialState)

    const handleToggle = useCallback((newVal: boolean)=>{
        setState(newVal)
    },[])
    return {state,handleToggle}
}