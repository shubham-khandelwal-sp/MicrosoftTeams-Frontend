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