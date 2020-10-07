import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebar_active"} `}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
