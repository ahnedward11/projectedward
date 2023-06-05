import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";


export default function Profile() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://media.licdn.com/dms/image/D5603AQGi5VETRq_elA/profile-displayphoto-shrink_800_800/0/1683920414621?e=1691020800&v=beta&t=l75IPfNFEunmEmP7nO8SD3XJiMB-yEVl-aoarpBYdAg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Edward Ahn</h4>
                <span className="profileInfoDesc">Welcome to my Page</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}