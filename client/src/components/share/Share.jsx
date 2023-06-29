import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Popup from "../../components/popup/Popup";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const img = useRef();
  const [file, setFile] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: img.current.value
    };
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  const popupsubmit = async (e) => {
    var imgurl = document.getElementById('url').value
    desc = imgurl
    
  }


  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's on your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>

        <div className="shareOptions">
        <label htmlFor="file" className="shareOption">
          <div className="shareOptions">
            <button onClick={()=> setButtonPopup(true)}>   
              <PermMedia htmlColor="tomato" className="shareIcon" />
              {/* <span className="shareOptionText">Photo or Video</span> */}
            </button>
          </div>
          
          <button className="shareButton" type="submit">
            Share
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form className="shareBottom" onSubmit={submitHandler}>
          <input
            placeholder={"enter image url"}
            id = 'url'
            className="shareInput"
            ref={img}
          />
            <button type="submit" className="shareButton" onSubmit={popupsubmit}>submit</button>
          
          </form>
            
          </Popup>
        </label>
      </div>
      </div>
    </div>
  );
}