import  "./Home.css"
import Card from "../Card/Cards";


import arrow from "../../../public/arrow.svg"
import textbox from "../../../public/textbox.svg"
import Footer from "../Footer/Footer";
import perfil from "../../../public/perfil.png"
import {Canvas} from "@react-three/fiber"
import Model from "../Laptop/Scene"
import { Camera, PointLight } from "three";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

function Home() {
    return ( 
        <div  className="aboutMe">
    


   
      <div className="casa">
      
      <h1 id="home">Santiago Becerra</h1>
      <h2>Full Stack Developer</h2>

      </div>
      <a href='#me' > 
      <img className="call" src={textbox}></img>
      <img className="call" src={arrow}></img>
     
    </a>
        
        </div>
     );
}

export default Home;