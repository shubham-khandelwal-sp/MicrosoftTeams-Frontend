import {AvatarColorCombos} from "../../../constants/constants" 
import { AvatarInfo } from "../../../types/Types"
type ChatAvatarProp = {
    name: string,
    id: number
}
function getInitials(name: string){
    const words= name?.trim()?.split(" ");
    const initials =words?.map((word) => word.charAt(0))
    return initials?.join("")
}
export const  ChatAvatar = ({name,id}: ChatAvatarProp) => {
    const avatarText: string = getInitials(name)
    const avatarStyle: AvatarInfo = AvatarColorCombos[id?(id%6):0]
    return (
        <div className="chat-avatar-icon" style={{ backgroundColor:avatarStyle.background, color: avatarStyle.text }}>
            {avatarText}
        </div>
    )
}