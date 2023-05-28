import { AvatarInfoType } from "../Types/types";
export const fetchApi = (url: string) => {
    return fetch(url);
};

const activePort: string = "4001"

export const getAllUsersUrl: string = `http://localhost:${activePort}/getAllUsers`

export const getUserMessagesUrl = (userId: string) : string => {
    return `http://localhost:${activePort}/getUserMessages/${userId}`
}

export const addUserMessageUrl =(userId: string) : string => {
    return `http://localhost:${activePort}/addMessage/${userId}`
}


export const STATUS ={
    SUCCESS : "SUCCESS",
    LOADING: "LOADING",
    ERROR: "ERROR",
    IDLE: "IDLE"
}

export const ACTION = {
    ADD_MESSAGE: "ADD_MESSAGE",
};

export const AvatarColorCombos: AvatarInfoType[] = [
    {
        background: "#c8d4e7",
        text: "#07214b"
    },
    {
        background: "#f6d4df",
        text: "#70203b"
    },
    {
        background: "#ebd3e1",
        text: "#522341"
    },
    {
        background: "#d7e3e9",
        text: "#29454e"
    },
    {
        background: "#dbe1d6",
        text: "#404c35"
    },
    {
        background: "#fce9d5",
        text: "#875e34"
    }
]