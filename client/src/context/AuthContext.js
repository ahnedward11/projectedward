// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
//   // user: {
//   //   _id: "6477af1ac3185b60b8214a20",
//   //   username: "kanye",
//   //   email: "kanye@gmail.com",
//   //   profilePicture: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSYhfJIAMm_e0ZAGSZonVFaxiz1qHenwVpEvjKPLh223uiflg8-mrdQmIwS7eSydlHbMJIqjyfC2rHN-1A",
//   //   coverPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
//   //   isAdmin: false,
//   //   followers: [],
//   //   following: ["6477aa1a70c18f4b4134637b"],
//   // },
//   isFetching: false,
//   error: false,
// };


// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
//   // useEffect(()=>{
//   //   localStorage.setItem("user", JSON.stringify(state.user))
//   // },[state.user])
  
//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  //   user: {
  //   _id: "6477af1ac3185b60b8214a20",
  //   username: "kanye",
  //   email: "kanye@gmail.com",
  //   profilePicture: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSYhfJIAMm_e0ZAGSZonVFaxiz1qHenwVpEvjKPLh223uiflg8-mrdQmIwS7eSydlHbMJIqjyfC2rHN-1A",
  //   coverPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
  //   isAdmin: false,
  //   followers: [],
  //   following: ["6477aa1a70c18f4b4134637b"],
  // },
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};