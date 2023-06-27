import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import First from "./pages/first/First"
import styled from 'styled-components'
import Nba from "./pages/nba/Nba"


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router> 
      <First/>
      <Routes>  
        <Route path="/home" element={<First/>} exact />
        <Route exact path="/" element={user ? <Home/> : <Register/>}  />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>

        <Route path="/nba" element={<Nba/>} exact />
        <Route path="/register" element={user ? <Navigate to ="/" /> :<Register/>} exact />
        <Route path="/profile/:username" element={user ? <Profile />:<Login />} exact />
        <Route path="/messenger" element={user ? <Messenger/> : <Login />} exact />
      </Routes>
    </Router>

)}

export default App;



