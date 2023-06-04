//libs
import { useState } from "react";

//components
import { Sidebar } from "./components/sideBar";
import { Body } from "./components/body";
import { Header } from "./components/header";

//styles
import "./styles.css";

export const App = () => {
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
};
