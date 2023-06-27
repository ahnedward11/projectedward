import "./topbar.css";

import { Search, Person, Chat, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const { isFetching, dispatch } = useContext(AuthContext);
  const search = useRef();
  // (await axios.get(`/users?username=${username}`))

  const handleSubmit =  async (e) => {
    e.preventDefault();
    var search = document.getElementById('searchbar').value
    console.log(search)
    try {
      await axios.get("https://idkman-fpcq.onrender.com/api/users?username=" + search)
      navigate("/profile/" + search)
    } catch (err) {
      alert("This user does not exist!");
      console.log(err);
    }

  }

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://idkman-fpcq.onrender.com/api/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);


  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home")
    console.log("handleclick in here")
    loginCall(
      { email: null, password: null },
      dispatch
    );

    

  };
  return (
    <div style={{backgroundImage:`url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80")` }}>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">EdApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <form action="" method="get" className="formset" onSubmit={handleSubmit}> 
          <Search className="searchIcon" />
          <input 
            className="searchInput"
            id = 'searchbar'
          />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" , color: "white"}}>
            <span className="topbarLink">Homepage</span>
          </Link>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <form  onSubmit={handleClick}>

            <button to= "/home"  type="submit" disabled={isFetching}>
            <ExitToApp />
            </button>

            </form>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : "./img/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
    </div>
  );
}

