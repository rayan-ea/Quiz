import React, { Component } from "react";
import "./SideBar.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-menu">
          <button className="dashboard">
            <MdSpaceDashboard />
            Dashboard
          </button>
          <button className="support">
            <BiSupport />
            Support
          </button>
          <button className="notification">
            <MdNotifications />
            Notification
          </button>
        </div>
        <div className="logout-container">
          <button className="logout">
            <RiLogoutBoxFill />
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
