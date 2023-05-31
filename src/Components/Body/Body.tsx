//components
import {Home} from "./home";
import {Chat} from "./chat";
import {Teams} from "./teams";
import {Activity} from "./activity";
import {Apps} from "./apps";
import {Calls} from "./calls";
import {Files} from "./files";
import {Help} from "./help";
import {More} from "./more";
import {SprinklrHub} from "./sprinklrHub";

//styles
import "./styles.css";

enum ViewType {
  Home = 'Home',
  Activity = 'Activity',
  Chat = 'Chat',
  Teams = 'Teams',
  Calls = 'Calls',
  Files = 'Files',
  SprinklrHub = 'Sprinklr Hub',
  More = 'More',
  Apps = 'Apps',
  Help = 'Help',
}

const VIEW_TYPE_VS_COMPONENT_MAP = {
  [ViewType.Home]: <Home />,
  [ViewType.Activity]: <Activity />,
  [ViewType.Chat]: <Chat />,
  [ViewType.Teams]: <Teams />,
  [ViewType.Calls]: <Calls />,
  [ViewType.Files]: <Files />,
  [ViewType.SprinklrHub]: <SprinklrHub />,
  [ViewType.More]: <More />,
  [ViewType.Apps]: <Apps />,
  [ViewType.Help]: <Help />,
};

type BodyProp = {
  activePage: string
}

export const Body = ({ activePage }: BodyProp) => {
  const component = VIEW_TYPE_VS_COMPONENT_MAP[activePage as ViewType] || <Home />;
  return <div className="body">{component}</div>;
}
