import {AvatarColorCombos} from "../../../Constants/constants" 
import { AvatarInfoType } from "../../../Types/types"
type ChatAvatarProp = {
    name: string,
    id: number
}
function getInitials(name: string){
    const words= name.trim().split(" ");
    const initials =words.map((word) => word.charAt(0))
    return initials.join("")
}
export function ChatAvatar({name,id}: ChatAvatarProp){
    const avatarText: string = getInitials(name)
    const avatarStyle: AvatarInfoType = AvatarColorCombos[id?(id%6):0]
    console.log(avatarStyle);
    return (
        <div className="chat-avatar-icon" style={{ backgroundColor:avatarStyle.background, color: avatarStyle.text }}>
            {avatarText}
        </div>
    )
}