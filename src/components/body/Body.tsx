//components
import { Home } from "./components/home";
import { Chat } from "./components/chat";
import { Teams } from "./components/teams";
import { Activity } from "./components/activity";
import { Apps } from "./components/apps";
import { Calls } from "./components/calls";
import { Files } from "./components/files";
import { Help } from "./components/help";
import { More } from "./components/more";
import { SprinklrHub } from "./components/sprinklrHub";

//constants
import { VIEW_TYPE } from "./components/constants";

//styles
import "./styles.css";

const VIEW_TYPE_VS_COMPONENT_MAP = {
  [VIEW_TYPE.HOME]: <Home />,
  [VIEW_TYPE.ACTIVITY]: <Activity />,
  [VIEW_TYPE.CHAT]: <Chat />,
  [VIEW_TYPE.TEAMS]: <Teams />,
  [VIEW_TYPE.CALLS]: <Calls />,
  [VIEW_TYPE.FILES]: <Files />,
  [VIEW_TYPE.SPRINKLR_HUB]: <SprinklrHub />,
  [VIEW_TYPE.MORE]: <More />,
  [VIEW_TYPE.APPS]: <Apps />,
  [VIEW_TYPE.HELP]: <Help />,
};

type BodyProp = {
  activePage: string;
};

export const Body = ({ activePage }: BodyProp) => {
  const component = VIEW_TYPE_VS_COMPONENT_MAP[activePage as VIEW_TYPE] || (
    <Home />
  );
  return <div className="body">{component}</div>;
};
