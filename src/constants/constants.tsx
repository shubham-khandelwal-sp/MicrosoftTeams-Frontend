//types
import { AvatarInfo } from "../types/Types";

export const fetchApi = (url: string) => {
    return fetch(url);
};

export const STATUS ={
    SUCCESS : "SUCCESS",
    LOADING: "LOADING",
    ERROR: "ERROR",
    IDLE: "IDLE"
}

export const ACTION = {
    ADD_MESSAGE: "ADD_MESSAGE",
};

export const AvatarColorCombos: AvatarInfo[] = [
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