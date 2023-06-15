import "./update.css"
import { useState } from "react";
import axios from "axios";

    export default function Update({setOpenUpdate}) {
        const [cover, setCover] = useState(null);
        // const [profile, setProfile] = useState(null);
        // const [texts, setTexts] = useState({
        // email: user.email,
        // password: user.password,
        // name: user.name,
        // city: user.city,
        // website: user.website,
    // });

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const newPost = {
    //       userId: user._id,
    //       desc: desc.current.value,
    //     };
    //     if (file) {
    //       const data = new FormData();
    //       const fileName = Date.now() + file.name;
    //       data.append("name", fileName);
    //       data.append("file", file);
    //       newPost.img = fileName;
    //       console.log(newPost);
    //       try {
    //         await axios.post("/upload", data);
    //       } catch (err) {}
    //     }
    //     try {
    //       await axios.post("/posts", newPost);
    //       window.location.reload();
    //     } catch (err) {}
    //   };

//   });
    return(
        <div className="update">
            Update
            <form>
                <input type="file" />
                <input type="file" />
                <input type="file" />
            </form>
            <button onClick={() =>setOpenUpdate(false)}>X</button>
        </div>



);
};

