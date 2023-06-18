import "./update.css"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";


    export default function Update({setOpenUpdate}) {
        const desc = useRef();
        const city = useRef();
        const from = useRef();
        const relationship= useRef();
        const profilePicture= useRef();
        const coverPicture = useRef();
        const { user } = useContext(AuthContext);
        const username = useParams().username

    const handleClick = async () => {
        const updatedUser = {
            desc : document.getElementById('desc').value,
            city : document.getElementById('city').value,
            from : document.getElementById('from').value,
            relationship : document.getElementById('relationship').value,
            profilePicture : document.getElementById('profile').value,
            coverPicture : document.getElementById('cover').value,
          };
        try {
            await axios.put(`/users/${user._id}`, updatedUser)

        } catch (err) {
        }
      };
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
                <label htmlFor="">Desc</label>
                <input 
                    id = 'desc'
                    ref={desc}
                    type="text"/>
                <br />
                <label htmlFor="">City</label>
                <input 
                    id = 'city'
                    ref={city}
                    type="text"/>
                <br />
                <label htmlFor="">From</label>
                <input 
                    id = 'from'
                    ref={from}
                    type="text"/>
                <br />
                <label htmlFor="">Relationship</label>
                <input 
                    id = 'relationship'
                    ref={relationship}
                    type="text"/>
                <br />
                <label htmlFor="">Profile Picture</label>
                <input 
                    id = 'profile'
                    ref={profilePicture}
                    type="file"/>
                <br />
                <label htmlFor="">Cover Picture</label>
                <input 
                    id = 'cover'
                    ref={coverPicture}
                    type="file"/>
            </form>
            <button onClick={handleClick}>Submit</button>
            <button onClick={() =>setOpenUpdate(false)}>Exit</button>
        </div>



);
};

