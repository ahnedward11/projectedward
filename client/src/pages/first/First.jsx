import axios from "axios";
import { useRef } from "react";
import "./first.css";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import React, { Suspense } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import 'bootstrap/dist/css/bootstrap.css';


export default function First() {
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
  background-color: #12294c;
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
    
      
            
           
                

      <bodyy class="d-flex text-center text-white bg-dark">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            {/* <h3 class="float-md-left mb-0">EdApp</h3>
             */}
            <main class="px-3">
            {/* <nav class="nav nav-masthead justify-content-center float-md-right">
                    <a class="nav-link active" aria-current="page" href="/home" >Home</a>
                    <a class="nav-link" href="/login">Login</a>
                    <a class="nav-link" href="/register">Register</a>


            </nav> */}
            {/* <h1>Welcome to EdApp</h1>
            {/* <p class="lead"><br></br> 555-3 Mateo St.
                Los Angeles, CA <br></br>
                The Culinary team is always crafting new dishes inspired by California produce and local flavors!</p>
            <a href="/login" class="btn btn-lg btn-secondary font-weight-bold border-white bg-white">View
                Menu</a> */}
            </main>

          </div>
        </header>
             <Section>
                   {/* <Navbar /> */}
     <Container>
       <Left>
         <Title>Welcome to EdApp</Title>
         <WhatWeDo>
           {/* <Line src="./img/line.png" /> */}
           {/* <Subtitle>What we Do</Subtitle> */}
         </WhatWeDo>
         <Desc>
           we enjoy creating immersive, human interactive experiences.
         </Desc>
         <a href="/login">
         <Button>Log In</Button>
         </a>
       </Left>
       <Right>
         <Canvas>
           <Suspense fallback={null}>
             <OrbitControls enableZoom={false} />
             <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
             <Sphere args={[1, 100, 200]} scale={2.4}>
               <MeshDistortMaterial
                color="#12294c"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <Img src="./img/friend1.png" />
      </Right>
    </Container>
  </Section>
        

        </div>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossorigin="anonymous"></script>
      </bodyy>
      










  );
}
