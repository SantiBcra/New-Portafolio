import front from "../../../public/code f.jpg"
import back from "../../../public/code b.jpg"

import "./Cards.css"

function Cards() {



    ScrollReveal().reveal('.image', {delay:0, origin:"left", duration:1000});
    ScrollReveal().reveal('.text-box', {delay:0, origin:"right", duration:1000});

    
    ScrollReveal().reveal('.image2', {delay:0, origin:"right", duration:1000});
    ScrollReveal().reveal('.text-box2', {delay:0, origin:"left", duration:1000});
    return ( 

<>
       
<section id="me" className="sec-1">
    <div className="container">
        <h2>FrontEnd</h2>
            <div className="contentt">
                    <div className="image"><img className="perfil" src={front} ></img></div>
                    <div className="text-box">
                    <text> SIMPLE REACT COMPONENTS TO CREATE INTERFACES WITH EXCELLENT UX UI.</text>
                    <br></br>
                    
                    <text>REUSABILITY - INDEPENDENCE - EFFICIENCY</text>
                    <br></br>
                    
                    <h3>STACK: REACT | REDUX | NEXT JS | TYPESCRIPT | TAILWIND</h3>
                    </div>
            </div>
        
    </div>
   
</section>



<section className="sec-1">
    <div className="container">
        <h2>BackEnd</h2>
            <div className="contentt">
                   
                    <div className="text-box2">
                    <text>FAST AND ADAPTABLE MICROSERVICES</text>
                    <br></br>
                    <br></br>
                    <text>SECURITY - INDEPENDENCE - EASY DEBUGGING</text>
                    <br></br>
                    <br></br>
                    <text> STACK: NODE JS | EXPRESS | SEQUELIZE | POSTGRESQL</text>
                    </div>
                    <div class="image2"><img className="perfil" src={back} ></img></div>
            </div>
    </div>
</section>



</>

     );
}

export default Cards;