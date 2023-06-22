import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
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

// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-type: y mandatory;
//   scroll-behavior: smooth;
//   overflow-y: auto;
//   scrollbar-width: none;
//   color: white;
//   background: url("./img/bg.jpeg");
//   &::-webkit-scrollbar{
//     display: none;
//   }
// `;
function App() {
  const {user} = useContext(AuthContext)
  return (
    // <Container>
    <Router> 
      <Routes>  
      {/* <Route exact path="/"
        element={user ? <Home /> : <Register />}
        />
        <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Navigate to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Navigate to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route> */}
        <Route exact path="/" element={user ? <Home/> : <Register/>}  />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>

        <Route path="/nba" element={<Nba/>} exact />
        <Route path="/register" element={user ? <Navigate to ="/" /> :<Register/>} exact />
        <Route path="/profile/:username" element={user ? <Profile />:<Login />} exact />
        <Route path="/messenger" element={user ? <Messenger/> : <Login />} exact />
      </Routes>
    </Router>
    // </Container>
)}

export default App;



{/* <Route path="/" element={user ? <Home/> : <Register/>} exact />
<Route path="/login" element={<Login/>} exact />
<Route path="/likedposts" element={<LikedPosts/>} exact />
<Route path="/nba" element={<Nba/>} exact />
<Route path="/register" element={user ? <Navigate to ="/" /> :<Register/>} exact />
<Route path="/profile/:username" element={!user ? <Navigate to="/" /> : <Profile />} exact />
<Route path="/messenger" element={<Messenger/>} exact /> */}