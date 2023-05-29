import Home from "./Home/Home";
import {Chat} from "./Chat/Chat";
import Teams from "./Teams/Chat";
import Activity from "./Activity/Activity";
import Apps from "./Apps/Apps";
import Calls from "./Calls/Calls";
import Files from "./Files/Files";
import Help from "./Help/Help";
import More from "./More/More";
import SprinklrHub from "./SprinklrHub/SprinklrHub";
import "./styles.css";

type BodyProp = {
  activePage: string
}
export default function Body({ activePage }: BodyProp) {
  let component = <Home />;
  switch (activePage) {
    case "Home":
      component = <Home />;
      break;
    case "Activity":
      component = <Activity />;
      break;
    case "Chat":
      component = <Chat />;
      break;
    case "Teams":
      component = <Teams />;
      break;
    case "Calls":
      component = <Calls />;
      break;
    case "Files":
      component = <Files />;
      break;
    case "Sprinklr Hub":
      component = <SprinklrHub />;
      break;
    case "More":
      component = <More />;
      break;
    case "Apps":
      component = <Apps />;
      break;
    case "Help":
      component = <Help />;
      break;
    default:
      component = <Home />;
      break;
  }
  return <div className="body">{component}</div>;
}
