import React ,{useState}from 'react'
import './SpeakJarvis.css';
import logo from './jarvis4.png'

import{
  useNavigate
  
} from "react-router-dom"
export default function SpeakJarvis() {
  const [showsearch, setShowSearch] = useState('none')
  const [animationname, setAnimationName] = useState('spin')
  const [transcript, setTranscript] = useState('');
  const navigate=useNavigate()
  const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition=new SpeechRecognition();
  //  recognition.continous=true
  var check=false;
   

  recognition.onstart=function(){
    console.log("voice is activated,you can speak to microphonee");
}
recognition.onresult=function(event){
  // console.log(event);
  const current=event.resultIndex;
  const temp=event.results[current][0].transcript;
  const lowertranscript=temp.toLowerCase()
  setTranscript(lowertranscript)
  // content.textContent=transcript;
  // console.log(transcrip)
  readOutLoud(lowertranscript)
  
  
}
recognition.onend=function(){
  startRecognition()
}

function readOutLoud(message){
  const speech=new SpeechSynthesisUtterance();
  speech.text='I dont know what you said';
   console.log('Enter readOutLoud')
   console.log(message)
  if(message.includes('technology')){
    console.log("technology matched")
    speech.text='Opening technology page'
    // window.location.href='/technology'
    navigate('/technology')
    
  }
  else if(message.includes('health'))
    {

        // const homebtn=document.getElementById('homebtn');
        speech.text="Opening healthpage"
        window.speechSynthesis.speak(speech.text);
      
        // window.speechSynthesis.speak(speech);
        navigate('/health')
        
        say();
        function say(){
          // const speech=new SpeechSynthesisUtterance();
          // speech.text="would you like me to read"
          //   window.speechSynthesis.speak(speech.text);
            window.speechSynthesis.speak('would you like me to read')
            if(message.includes("yes"))
            {
              const titletext=document.getElementsByTagName('h5')
              
                // hometxt=document.getElementById('hometxt');
                // window.speechSynthesis.speak(titletext);
              console.log(titletext)
            }
            
        }
        
        // homebtn.addEventListener("click")
    }
    else if(message.includes('sports')){
      speech.text='Opening sports page'
      navigate('/sports')
      window.speechSynthesis.speak(speech)
    }
    speech.text='would you like me to read'
    window.speechSynthesis.speak(speech)
    if(message.includes('read for me')){
      const title_text=document.getElementsByName('title-text')
      speech.text=title_text[0].innerText;
      // window.speechSynthesis.speak(speech)
      // speaking(title_text[0].innerText)
      speaking(speech)
      const description_text=document.getElementsByName('description-text')
      speech.text=description_text[0].innerText
      speaking(speech)
      


    }

  
}
function speaking(speech){
  console.log("entering speaking")
  //  const speech=new SpeechSynthesisUtterance()
  speech.volume=1;
  speech.rate=1;
  speech.pitch=1;
  window.speechSynthesis.speak(speech);
}

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  function startRecognition()  {
    if(check===true){
      check=false
      return 
    }
    recognition.start();
  };

  function stopRecognition () {
    check=true
    // recognition.stop();
  };
  const handleLogoClicked=()=>{
    if(showsearch==='none'){
      startRecognition()
    }
    else{
      stopRecognition()
    }
    handleSearch()

  }
  // const handleSpeak=()=>{
  //   const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
  //   const recognition=new SpeechRecognition();
  
  //   recognition.onstart=function(){
    //       console.log("voice is activated,you can to microphonee");
    //   }
    // }
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
