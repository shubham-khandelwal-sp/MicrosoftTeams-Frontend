export type SideBarOption ={
    id: number,
    name: string,
    icon: JSX.Element
}

export type ChatListDataType = {
    id: number,
    name: string,
    lastMessage: string,
    lastModified: string
}

export type ChatMessageType = {
    id: number,
    sender: number,
    message: string,
    timing: string
}