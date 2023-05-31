//components
import {Home} from "./components/home";
import {Chat} from "./components/chat";
import {Teams} from "./components/teams";
import {Activity} from "./components/activity";
import {Apps} from "./components/apps";
import {Calls} from "./components/calls";
import {Files} from "./components/files";
import {Help} from "./components/help";
import {More} from "./components/more";
import {SprinklrHub} from "./components/sprinklrHub";

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
