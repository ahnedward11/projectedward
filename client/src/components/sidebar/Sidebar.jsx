import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  SportsBasketball,
  Settings,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">Feed</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <Link to="/messenger" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">Chats</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <SportsBasketball className="sidebarIcon" />
            <Link to="/nba" style={{ textDecoration: "none", color: "black" }}>
            <span className="sidebarListItemText">NBA Stats</span>
            </Link>
          </li>

        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}