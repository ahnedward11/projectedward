import "./topbar.css";

import { Search, Person, Chat, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import {useNavigate} from "react-router-dom"

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: null, password: null },
      dispatch
    );
    // navigate("/")

  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">EdApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" , color: "white"}}>
            <span className="topbarLink">Homepage</span>
          </Link>
          {/* <span className="topbarLink">Timeline</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem">
            <Link to= "/messenger" style={{ textDecoration: "none", color: "white" }}>
              <Chat />
              {/* <span className="topbarIconBadge">2</span> */}
            </Link>
            
          </div>
          <div className="topbarIconItem">
            
            <Link to="/login" onSubmit={handleClick} style={{ textDecoration: "none", color: "white" }}>
            {/* <span className="topbarIconBadge">?</span> */}
            <ExitToApp />
            </Link>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}

