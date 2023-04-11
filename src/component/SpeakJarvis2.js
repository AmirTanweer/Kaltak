import React ,{useState}from 'react'
import './SpeakJarvis.css';
import logo from './jarvis4.png'

import{
  useNavigate
  
} from "react-router-dom"
export default function SpeakJarvis2() {
  const [showsearch, setShowSearch] = useState('none')
  const [animationname, setAnimationName] = useState('spin')
  const [transcript, setTranscript] = useState('');
  const SpeechRecognition=new window.webkitSpeechRecognition();
  SpeechRecognition.continuous=true;
  SpeechRecognition.interimResults = true;
  
    
  function starting(){
    console.log("clicked starting")
    SpeechRecognition.start()
      SpeechRecognition.onstart = () => {
          // document.querySelector("#status").style.display = "block";
          
          console.log("jarvis is listening")
      };
  }
  SpeechRecognition.onresult=function (event){
      const current=event.resultIndex;
  
      const temptranscript=event.results[current][0].transcript;
      setTranscript(temptranscript)
      console.log(temptranscript)
  }
  
  
  function ending(){
  SpeechRecognition.stop()
      
      SpeechRecognition.onend = () => {
          // document.querySelector("#status").style.display = "none";
          console.log("Jarvis is not listening")
      };
  }

const handleLogoClicked=()=>{
    if(showsearch==='none'){
    //   startRecognition()
    starting()
    }
    else{
        
      ending()
    }
    handleSearch()

  }
  
   const handleSearch=()=>{
     if(showsearch==='inline-block'){
       setShowSearch('none')
       setAnimationName('spin')
     }
     else{
       
     setShowSearch('inline-block')
     setAnimationName('none')
   }
  }



// endtalk.addEventListener('click',stoppingVoice)



     const logostyle={
      animationName:`${animationname}`
     }
     
     const mystyle={
       display:`${showsearch}`,
      }
   
   console.log("outside transcript"+transcript)

 


  
  
  // const texts=document.getElementsByClassNames('card-title')
  // console.log(texts)
  // texts.forEach(element => {
  //   console.log(element)
  // });
  

  return (
   <>
   <div id='logo_box' className="logo-search-box">
      <input value={transcript}  readOnly type="search" style={mystyle} name="srch" id="srch" />
      <img onClick={handleLogoClicked}  style={logostyle}   src={logo} alt="Logo" id='logo' />
      
    </div>
   </>

   
  )
}
