import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_icon" />
      <SidebarOption active={true} text="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption text="Explore" Icon={SearchOutlinedIcon} />
      <SidebarOption text="Notification" Icon={NotificationsOutlinedIcon} />
      <SidebarOption text="Messages" Icon={MessageOutlinedIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
      <SidebarOption text="Lists" Icon={ListAltOutlinedIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} />
      <SidebarOption text="More" Icon={MoreHorizOutlinedIcon} />
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
