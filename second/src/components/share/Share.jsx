import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://media.licdn.com/dms/image/D5603AQGi5VETRq_elA/profile-displayphoto-shrink_800_800/0/1683920414621?e=1691020800&v=beta&t=l75IPfNFEunmEmP7nO8SD3XJiMB-yEVl-aoarpBYdAg" alt="" />
          <input
            placeholder="What's on your mind Edward?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="red" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
            </div>
            <button className="shareButton">Post</button>
        </div>
      </div>
    </div>
  );
}