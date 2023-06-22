import axios from "axios";
import { useRef } from "react";
import "./register.css";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import React, { Suspense } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import 'bootstrap/dist/css/bootstrap.css';


export default function Register() {
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link>
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("./img/bova.jpeg");
  // background-size: cover;
  //   background-position: center;
  //   text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  //   box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
// const Body = styled.img `
//   height: 100vh;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
//   /* url("https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"); */
//   url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80");
//   background-size: cover;
//   background-position: center;
//   text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
//   box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
// `;

// const covercontainer = styled.img `
// max-width: 60vw;
// `

// const navlink = styled.img`
//   padding: 0.25rem 0;
//   font-weight: 700;
//   color: rgba(255,255,255,0.5);
//   margin-left: 1rem;
//   border-bottom: 0.25rem solid transparent;
// `

// const navlinkhover = styled.img`
//   color: rgba(255,255,255,0.5);
//   border-bottom-color:rgba(255,255,255,0.5);
// `

// const navlinkactive = styled.img`
//   color: white;
//   border-bottom-color:white;
// `

// const btnsecondary = styled.img`
//   color: #333;
//   text-shadow: none;
// `




  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
      
            
           
                

      <body class="d-flex text-center text-white bg-dark">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-left mb-0">EdApp</h3>
            <nav class="nav nav-masthead justify-content-center float-md-right">
                    <a class="nav-link active" aria-current="page" href="">Home</a>
                    <a class="nav-link" href="/login">Login</a>
                    <a class="nav-link" href="/register">Register</a>


            </nav>
            <main class="px-3">
            <h1>Bova</h1>
            <p class="lead"> Welcome to Bova! <br></br> 555-3 Mateo St.
                Los Angeles, CA <br></br>
                The Culinary team is always crafting new dishes inspired by California produce and local flavors!</p>
            <a href="/login" class="btn btn-lg btn-secondary font-weight-bold border-white bg-white">View
                Menu</a>
            </main>

          </div>
        </header>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossorigin="anonymous"></script>
      </body>
      










  );
}

// import axios from "axios";
// import * as THREE from "three";
// import { useRef, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import styled from "styled-components";
// import "./register.css";
// import {useNavigate} from "react-router-dom"
// import { Link } from "react-router-dom";

// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

//   @media only screen and (max-width: 768px) {
//     height: 200vh;
//   }
// `;

// const Container = styled.div`
//   height: 100%;
//   scroll-snap-align: center;
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;

//   @media only screen and (max-width: 768px) {
//     flex: 1;
//     align-items: center;
//   }
// `;

// const Title = styled.h1`
//   font-size: 74px;

//   @media only screen and (max-width: 768px) {
//     text-align: center;
//   }
// `;

// const WhatWeDo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Line = styled.img`
//   height: 5px;
// `;

// const Subtitle = styled.h2`
//   color: #da4ea2;
// `;

// const Desc = styled.p`
//   font-size: 24px;
//   color: lightgray;
//   @media only screen and (max-width: 768px) {
//     padding: 20px;
//     text-align: center;
//   }
// `;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Right = styled.div`
//   flex: 3;
//   position: relative;
//   @media only screen and (max-width: 768px) {
//     flex: 1;
//     width: 100%;
//   }
// `;

// const Img = styled.img`
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternate;

//   @media only screen and (max-width: 768px) {
//     width: 300px;
//     height: 300px;
//   }

//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;



// export default function Register() {
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const passwordAgain = useRef();
//   const navigate = useNavigate();


//   const handleClick = async (e) => {
//     e.preventDefault();
//     if (passwordAgain.current.value !== password.current.value) {
//       passwordAgain.current.setCustomValidity("Passwords don't match!");
//     } else {
//       const user = {
//         username: username.current.value,
//         email: email.current.value,
//         password: password.current.value,
//       };
//       try {
//         await axios.post("/auth/register", user);
//         navigate("/login")
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <Section>
//     {/* <Navbar /> */}
//     <Container>
//       <Left>
//         <Title>Think. Make. Solve.</Title>
//         <WhatWeDo>
//           {/* <Line src="./img/line.png" /> */}
//           <Subtitle>What we Do</Subtitle>
//         </WhatWeDo>
//         <Desc>
//           we enjoy creating delightful, human-centered digital experiences.
//         </Desc>
//         <Button>Learn More</Button>
//       </Left>
//       <Right>
//         <Canvas>
//           <Suspense fallback={null}>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={1} />
//             <directionalLight position={[3, 2, 1]} />
//             <Sphere args={[1, 100, 200]} scale={2.4}>
//               <MeshDistortMaterial
//                 color="#3d1c56"
//                 attach="material"
//                 distort={0.5}
//                 speed={2}
//               />
//             </Sphere>
//           </Suspense>
//         </Canvas>
//         <Img src="./img/moon.png" />
//       </Right>
//     </Container>
//   </Section>
//     // <div className="login">
//     //   <div className="loginWrapper">
//     //     <div className="loginLeft">
//     //       <h3 className="loginLogo">EdApp</h3>
//     //       <span className="loginDesc">
//     //         Register to Join!
//     //       </span>
//     //     </div>
//     //     <div className="loginRight">
//     //       <form className="loginBox" onSubmit={handleClick}>
//     //         <input
//     //           placeholder="Username"
//     //           required
//     //           ref={username}
//     //           className="loginInput"
//     //         />
//     //         <input
//     //           placeholder="Email"
//     //           required
//     //           ref={email}
//     //           className="loginInput"
//     //           type="email"
//     //         />
//     //         <input
//     //           placeholder="Password"
//     //           required
//     //           ref={password}
//     //           className="loginInput"
//     //           type="password"
//     //           minLength="6"
//     //         />
//     //         <input
//     //           placeholder="Password Again"
//     //           required
//     //           ref={passwordAgain}
//     //           className="loginInput"
//     //           type="password"
//     //         />
//     //         <button className="loginButton" type="submit">
//     //           Sign Up
//     //         </button>
//     //         <Link to="/login" >
//     //         <button className="loginRegisterButton">Log into Account</button>
//     //         </Link>
//     //       </form>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }