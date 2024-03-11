import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer.jsx'
import Gallery from "./components/Gallery/Gallery.jsx"
import Me from "./components/Me/Me.jsx"
function App() {
  
const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutLine = document.querySelector("[data-cursor-outline]")
window.addEventListener("mousemove", function (e){
const posX = e.clientX;
const posY = e.clientY;

cursorDot.style.left = `${posX}px`;
cursorDot.style.top = `${posY}px`;

// cursorOutLine.style.left = `${posX}px`;
// cursorOutLine.style.top = `${posY}px`;

cursorOutLine.animate({
  left: `${posX}px`,
  top: `${posY}px`
},     {duration: 500, fill: "forwards"});
})

  return (
    <>
    <div className='cursor-dot' data-cursor-dot></div>
    <div className='cursor-outline' data-cursor-outline></div>
      <NavBar/>
      <Home/>
      <Me/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
