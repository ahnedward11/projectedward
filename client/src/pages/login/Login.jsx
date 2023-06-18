import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">EdApp</h3>
          <span className="loginDesc">
          Sports All In One
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" >
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
            </Link>
            {/* <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

// import { useContext, useRef } from "react";
// import "./login.css";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import {useNavigate} from "react-router-dom"

// export default function Login() {
//   const email = useRef();
//   const password = useRef();
//   const navigate = useNavigate();
//   const { isFetching, dispatch } = useContext(AuthContext);



//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );
//     navigate("/")

//   };
//   const handleClicktwo = (e) => {
//     navigate("/register")

//   };

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">EdApp</h3>
//           <span className="loginDesc">
//             Sports All In One
//           </span>
//         </div>
//         <div className="loginRight">
//           <form className="loginBox" onSubmit={handleClick}>
//             <input
//               placeholder="Email"
//               type="email"
//               required
//               className="loginInput"
//               ref={email}
//             />
//             <input
//               placeholder="Password"
//               type="password"
//               required
//               minLength="6"
//               className="loginInput"
//               ref={password}
//             />
//             <button className="loginButton" type="submit" disabled={isFetching}>
//               {isFetching ? (
//                 <CircularProgress size="20px" />
//               ) : (
//                 "Log In"
//               )}
//             </button>
//             <span className="loginForgot">Forgot Password?</span>

//               <button className="loginRegisterButton" onSubmit={handleClicktwo}>
//                 {isFetching ? (
//                   <CircularProgress size="20px" />
//                 ) : (
//                   "Create a New Account"
//                 )}
//               </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


