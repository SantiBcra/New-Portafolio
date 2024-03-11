import "./Gallery.css"
import canchas from "../../../public/Projects/canchas.png"
import f1 from "../../../public/Projects/F1.png"
import portafolio from "../../../public/Projects/portafolio.png"
import screen from "../../../public/Projects/Screenshot_1.png"
import tradicion from "../../../public/Projects/tradicion.png"


function Gallery() {
    return ( 
<div className="portafolio">


<h2 id="work" >MY WORK</h2>

        <div className="Gallery">
        
        <div className="cardd" >
        <img className="galeria"  src={tradicion} ></img>
        
        <div className="text-box">
        <h4> Tradición  </h4>
            <p>I worked Freelance on a revenue control application for a business
                in the city of Córdoba, developing functions in Next and Node
                for commerce management.</p>
        </div>
        
        </div>

        <div className="cardd" >
        <img className="galeria" src={screen} ></img>

            <div className="text-box">
            <h4> Ciclos </h4>
            <p>I developed a website for a recording studio in the city of Córdoba, working on a single page application with pure CSS UX UI design and React.</p>
            </div>
        </div>  

        <div className="cardd" >
        <img  className="galeria"  src={canchas} ></img>
        
        <div className="text-box">
        <h4> Canchas Ya! </h4>
            <p>Work as a Node backend in a team using GitHub, Agile methods and Scrum, for the development of a booking application, creating microservices with Express to add, update, filter and delete data.</p>
            </div>
        </div>
         

        <div className="cardd" >
        <img className="galeria"  src={f1} ></img>
        
        <div className="text-box">
        <h4> Drivers </h4>
            <p>My First React-Redux Website, create, search, filter and sort F1 drivers Cards. Developed pagination, form to create cards, search ba
                r, filters and sorting buttons and routing of single page application.</p>
            </div>
        </div>

        <div className="cardd" >
        <img  className="galeria" src={portafolio} ></img>
       
        <div className="text-box">
        <h4>Portafolio </h4>
            <p>I worked Freelance on a revenue control application for a business
                in the city of Córdoba, developing functions in Next and Node
                for commerce management.</p>
            </div>
        
        </div> 

        
        </div>
        </div>
     );
}

export default Gallery;