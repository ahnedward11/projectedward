import "./setting.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Setting() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=edward`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    const editUser = async () => {
      const res = await axios.put(`/users?username=6477aa1a70c18f4b4134637b`);
    //   setUser(res.data);
    };
    editUser();
  }, [username]);


  return (
   <div></div>
  );
}
