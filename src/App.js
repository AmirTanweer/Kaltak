import React,{useState} from 'react'
import NavBar from './component/NavBar'
// import Card from './component/Card'
import News from './component/News'
// The available categories are : general, world, nation, business, technology, entertainment, sports, science and health.
import{
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom"
import SpeakJarvis3 from './component/SpeakJarvis3';

export default function App() {
  const [text, setText] = useState("");
  const handleOnChange=(e)=>{
       setText(e.target.value);
       e.preventDefault();
      
  }
  const [nvcolor, setNvColor] = useState("light")
  const [bgcolor, setBgColor] = useState("white");
  const [textcolor, setTextColor] = useState("black")
  const [tog, setTog] = useState(0);
  const handleToggle=()=>{
     console.log("Toggled");
     if(tog===0){
       setBgColor("blue")
       setTextColor("white")
       setNvColor("dark")
       setTog(1);

       
      }
      else{
       setBgColor("white")
       setTextColor("black")
       setNvColor("light")
       setTog(0);

     }
  }
  return (
    <div>
      <Router>

      <NavBar  handleOnChange={handleOnChange} nvcolor={nvcolor}  handleToggle={handleToggle} text={text}/>
        <SpeakJarvis3  handleToggle={handleToggle}  handleOnChange={handleOnChange}/>
      
      <Routes>
      <Route exact path='/' element={<News key="general" nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='general' country="in"/>} />
      <Route exact path='/sports' element={<News key='sports' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='sports' country="in"/>} />
      <Route exact path='/entertainment' element={<News key='entertainment' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='entertainment' country="in"/>} />
      <Route exact path='/business' element={<News key='business' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='business' country="in"/>} />
      <Route exact path='/technology' element={<News key='technology' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='technology' country="in"/>} />
      <Route exact path='/science' element={<News key='science' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='science' country="in"/>} />
      <Route exact path='/health' element={<News key='health' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='health' country="in"/>} />
      <Route exact path='/world' element={<News key='world' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='world' country="in"/>} />
      <Route exact path='/nation' element={<News key='nation' nvcolor={nvcolor} bgcolor={bgcolor} textcolor={textcolor} text={text} category='nation' country="in"/>} />
        </Routes>
      </Router>
    </div>
  )
}
