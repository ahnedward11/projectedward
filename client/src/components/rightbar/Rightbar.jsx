import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(

    currentUser.followings.includes(user?.id)
  );



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

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`https://idkman-fpcq.onrender.com/api/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`https://idkman-fpcq.onrender.com/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };


  const handleMessage = async () => {
    const newConversation = {
      senderId: currentUser._id,
      receiverId: user._id,
    };
    try {
      const convo = await axios.get(`https://idkman-fpcq.onrender.com/api/conversations/find/${currentUser._id}/${user._id}`)
      console.log(convo)
      if (convo.data){
        console.log("already made")
        console.log(currentUser._id)
        console.log(user._id)
        
        
      }
      else{
        await axios.post("https://idkman-fpcq.onrender.com/api/conversations", newConversation)
        
        
      }

      // if (await axios.get(`/conversations/find/${currentUser._id}/${user._id}`)){
      //   console.log("already made")
      //   console.log(currentUser._id)
      //   console.log(user._id)
      // }
      // else{
      //   await axios.post("/conversations", newConversation)
      // }
     
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          {/* <img className="birthdayImg" src="assets/gift.png" alt="" /> */}
          <span className="birthdayText">
            <b>Todays Debate Topic:</b> Who is the greatest basketball player ever?
          </span>
        </div>
        <img className="rightbarAd" src="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTY4MDMxNzcwMzczNzI3NTA1/mj_vs_bronjpg.webp" alt="" />
        {/* <h4 className="rightbarTitle">Online Friends</h4> */}
        <ul className="rightbarFriendList">
          {friends.map((friend) => (
            <span className="rightbarFollowingName">{friend.username}</span>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        {user.username !== currentUser.username && (
          <Link to= "/messenger" style={{ textDecoration: "none" }}>
          <button className="rightbarFollowButton" onClick={handleMessage}>
            Message
          </button>
          </Link>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? friend.profilePicture
                      : "./img/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}