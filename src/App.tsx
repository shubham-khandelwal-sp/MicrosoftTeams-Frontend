import "./styles.css";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
export default function App() {
  const [activePage, setActivePage] = useState<string>("Home");

  function handlePageClick(selectedPage: string): void {
    setActivePage(selectedPage);
  }
  return (
    <div className="teams-container">
      <div className="teams-header">
        <Header />
      </div>
      <div className="teams-content">
        <div className="teams-sidebar">
          <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
        </div>
        <div className="teams-body">
          <Body activePage={activePage} />
        </div>
      </div>
    </div>
  );
}
