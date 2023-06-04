//types
import { AvatarInfo } from "../types/types";

//constants
import { AvatarColorCombos } from "../constants/constants";

type ChatAvatarProp = {
  name: string | undefined;
  id: number | undefined;
};
function getInitials(name: string | undefined) {
  const words = name?.trim()?.split(" ");
  const initials = words?.map((word) => word.charAt(0));
  return initials?.join("");
}
export const ChatAvatar = ({ name, id }: ChatAvatarProp) => {
  const avatarText = getInitials(name);
  const avatarStyle: AvatarInfo = AvatarColorCombos[id ? id % 6 : 0];
  return (
    <div
      className="chat-avatar-icon"
      style={{
        backgroundColor: avatarStyle.background,
        color: avatarStyle.text,
      }}
    >
      {avatarText}
    </div>
  );
};
