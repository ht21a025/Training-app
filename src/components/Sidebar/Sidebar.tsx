import { useState } from "react";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";
import "./Sidebar.css"
import SignOut from "../Login/SignOut";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(true);

  const handleToggleClick = () => {
    if (isTransitionComplete) {
      setIsSidebarOpen(!isSidebarOpen);
      setIsTransitionComplete(false);
    }
  };

  const handleMenuClick = (link: string) => {
    if (!isSidebarOpen) {
      return;
    }

    setIsSidebarOpen(false);

    setTimeout(() => {
      window.location.pathname = link;
    }, 500);
  };

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true);
  };

  return (
    <div
      className={`Sidebar ${isSidebarOpen ? "Sidebar_open" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <ul className="SidebarList">
        <SidebarIcon />
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => handleMenuClick(value.link)}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
      <SignOut />
      <div
        className={`toggle_btn ${isSidebarOpen ? "toggle_btn_close" : ""}`}
        onClick={handleToggleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`"mask" ${isSidebarOpen ? "mask_active" : "mask"}`}
        onClick={handleToggleClick}
      />
    </div>
  );
}

export default Sidebar;
