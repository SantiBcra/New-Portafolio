import JS from "../../../public/icons/JS.svg"
import RC from "../../../public/icons/REACT.svg"
import TS from "../../../public/icons/TS.svg"
import RX from "../../../public/icons/RX.svg"
import NX from "../../../public/icons/NEXT.svg"
import ND from "../../../public/icons/NJ.svg"
import SQL from "../../../public/icons/SQL.svg"
import GIT from "../../../public/icons/GH.svg"
import TAIL from "../../../public/icons/TW.svg"



import linked from "../../../public/icons/linked.svg"
import mail from "../../../public/icons/mail.svg"
import phone from "../../../public/icons/phone.svg"

import "./Footer.css"

function Footer() {




    
   
    return (
<div className="pie">
        
<h2>About Me</h2>



<div>
<div className="text-box2">
        
            <text>
                
            HELLO EVERYONE! MY NAME IS SANTIAGO and I live in Córdoba Argentina. I AM A FULL STACK DEVELOPER GRADUATED from HENRY, MY GOAL IS TO FIND NEW CHALLENGES THAT ALLOW ME TO IMPROVE MYSELF TO ACHIEVE EXCELLENCE IN ALL MY PROJECTS.
                
            </text>
</div>
</div>


<div>


<div className="text-box2">
<text>STUDIES AND COURSES</text>
<br></br>
<br></br>
            <text>
            2024- Present  
            </text>
            <br></br>
            <br></br>
            <text className="yellow" >
            Back End Development and APIs    
            </text>
            <br></br>
            
            <text >
           Freecodecamp     
            </text>

            <br></br>
            <br></br>


            <text>
            2024- Present  
            </text>
            <br></br>
            <br></br>
            <text className="yellow">
            Relational Database Certification      
            </text>
            <br></br>
            
            <text >
           Freecodecamp     
            </text>


            <br></br>
            <br></br>
            
            <text>
            2023- 2024
            </text>
            <br></br>
            <br></br>
            <text className="yellow">
            Full Stack Developer
            </text>
            <br></br>
            
            <text >
           Henry     
            </text>


</div>
</div>







<h3>My Stack</h3>  
    <div className="panel">
    
                    
                  
                <div className="card">
                <img className="icon" src={JS} ></img>
                <p>JavaScript</p>
                </div>

                <div className="card">
                <img className="icon" src={RC} ></img>
                <p>React</p>
                </div>

                <div className="card">
                <img className="icon" src={RX} ></img>
                <p>Redux</p>
                </div>

                <div className="card">
                <img className="icon" src={TS} ></img>
                <p>TypeScript</p>
                </div>

                <div className="card">
                <img className="icon" src={NX} ></img>
                <p>NextJS</p>
                </div>

                <div className="card">
                <img className="icon" src={ND} ></img>
                <p>NodeJS</p>
                </div>

                <div className="card">
                <img className="icon" src={SQL} ></img>
                <p>PostgreSQL</p>
                </div>

                <div className="card">
                <img className="icon" src={TAIL} ></img>
                <p>TailWind</p>
                </div>

                <div className="card">
                <img className="icon" src={GIT} ></img>
                <p>GitHub</p>
                </div>

    </div>

    <div className="contacto">
        <h3>Contact Me</h3>


<div id="contact" className="contactera">
        <div className="linkC"> 
        <img className="iconoContacto" src={mail}></img>
        <text>santiariel</text>
        <text>1705@gmail.com</text>
        </div>

        <div className="linkC"> 
        <img className="iconoContacto" src={phone}></img>
        <text>+54 3517071239</text>
        </div>


        <div  className="linkC" onClick={() => window.open('https://www.linkedin.com/in/santiago-becerra-81361829b/', '_blank')} > 
        <img className="iconoContacto" src={linked}></img>
        <text>linkedin</text>
        </div>

        <div className="linkC" onClick={() => window.open('https://github.com/SantiBcra', '_blank')} > 
        <img className="iconoContacto" src={GIT}></img>
        <text>Github</text>
        </div>
       
       
      
</div>

</div>


</div>);
}

export default Footer;