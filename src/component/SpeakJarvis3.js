import React,{useState} from 'react'
import './SpeakJarvis.css';
import logo from './iron-man.png'
import { useSpeechSynthesis } from "react-speech-kit";
// import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition'
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';
import{
    useNavigate
    
  } from "react-router-dom"
export default function SpeakJarvis3(props) {
    const [showsearch, setShowSearch] = useState('none')
    
    const [animationname, setAnimationName] = useState('spin')
    const [message, setMessage] = useState('');
    const { speak,cancel ,speaking,pause,resume,voices} = useSpeechSynthesis();
    const listofLinks=['health','technology','general','science','entertainment','nation','world','sports','business']
    // const [isSpeaking, setIsSpeaking] = useState(false);

    // const handleSpeak = () => {
    //   speak(`${title}. ${description}`);
    //   setIsSpeaking(true);
    // };
  
    // const handleStop = () => {
    //   window.speechSynthesis.cancel();
    //   setIsSpeaking(false);
    // };
    const navigate=useNavigate()


    const commands = [
        {
          command: 'reset',
          callback: () => resetTranscript()
        },
        {
          command:['close jarvis','shut down','close','abort','shut down jarvis'],
          callback:()=> handleLogoClicked()
        },
        {
          command: 'shut up',
          callback: () => setMessage('I wasn\'t talking.')
        },
        {
          command: 'pause',
          callback: () => pause
        },
        {
          command: 'resume',
          callback: () => resume
        },
        {
          command: ['read more card *','open card *','read card *','open card no *','open card number *'],
          callback: (articleNumber) => {
            const spokenNumberToNumeric = {
              "one": 1,
              "two": 2,
              "three": 3,
              "four": 4,
              "five": 5,
              "six": 6,
              "seven": 7,
              "eight": 8,
              "nine": 9,
              "ten": 10,
            };
            let numericValue;
            const realNum=[1,2,3,4,5,6,7,8,9,10];
            const strNumber=['one','two','three','four','four','five','six','seven','eight','nine','ten'];
            const formattedArticleNumber = articleNumber.replace(/\s+/g, '');
            if(strNumber.includes(formattedArticleNumber)){
              const spokenNumber = articleNumber.replace(/[^A-Za-z\s]/g, '').trim().toLowerCase();
              numericValue = spokenNumberToNumeric[spokenNumber];

            }
            else if(realNum.includes(parseInt(formattedArticleNumber))){
              numericValue=parseInt(formattedArticleNumber)
            }          



            const btn=document.getElementsByClassName('btn btn-primary')
            const href=btn[numericValue].href
            // window.location.href=href;
            window.open(href, '_blank');
          }
        },
        {
          command: ['enable dark mode','dark mode','enabled dark mode'],
          callback: () => props.handleToggle()
        },
        {
          command: ['enable light mode','light mode','enabled light mode'],
          callback: () => props.handleToggle()
        },

        {
          command:['open *page','goto *page','goto *','go to *page','go to *'],
        callback: (pagename) => {
          
          console.log("pagename:",pagename)
          // let formattedPagename
         const formattedPagename = pagename.toLowerCase().replace(/\s+/g, '');
         console.log('formattedname:',formattedPagename)
          if(formattedPagename==='general'){
             console.log("matched")
             navigate('/')
             speak({text:`opening ${formattedPagename} page`,rate: 0.9,voice:voices[3]})
             
                
          }
          else if(listofLinks.includes(formattedPagename)){
            navigate('/' + formattedPagename);
            speak({text:`opening ${formattedPagename} page`,rate: 0.9,voice:voices[3]})
          
          }
          else{
            navigate('/')
            speak({text:`Sorry no page name ${formattedPagename} found`,rate: 0.9,voice:voices[3]})
          }

          

            
          
        }
      },
       
        {
          command: ['Hello','hi','hello jarvis'],
          callback: () => {setMessage('Hi!')
                    speak({text:"Hello How may i help you",rate: 0.8,voice:voices[3]})
        }
      },
        {
          command: ['help'],
          callback: () => {setMessage('Hi! how may i help you')
                    speak({text:"you can listen articles by saying 'read articles' you can listen specific news by saying 'read news 4' etc you can also navigate to other pages like sports business etc by saying 'goto health page' and you can enabled dark mode by saying 'enabled dark mode'",rate: 0.7,voice:voices[3]})
        }

          
          
        },
        {
          command: ['read for me','read news article','read news for me','read articles','read article','read news articles','read latest news','read headlines'],
          callback:  () => {
            
            
            const title_text=document.getElementsByName('title-text')
           
            
            for (let i = 0; i < title_text.length; i++) {
             
              ReadingTitle(title_text[i].innerText);
              
             
              
            }
            }
          
        },
        {
          command:"stop",
          callback:()=>{
              cancel()
          }
        },
        {
          command:["read news*","read article*",'read news no*','read news number*'],
          callback:(articleNumber)=>{
            const spokenNumberToNumeric = {
              "one": 1,
              "two": 2,
              "three": 3,
              "four": 4,
              "five": 5,
              "six": 6,
              "seven": 7,
              "eight": 8,
              "nine": 9,
              "ten": 10,
            };
            let numericValue;
            const realNum=[1,2,3,4,5,6,7,8,9,10];
            const strNumber=['one','two','three','four','four','five','six','seven','eight','nine','ten'];
            const formattedArticleNumber = articleNumber.replace(/\s+/g, '');
            if(strNumber.includes(formattedArticleNumber)){
              const spokenNumber = articleNumber.replace(/[^A-Za-z\s]/g, '').trim().toLowerCase();
              numericValue = spokenNumberToNumeric[spokenNumber];

            }
            else if(realNum.includes(parseInt(formattedArticleNumber))){
              numericValue=parseInt(formattedArticleNumber)
            }
            
              
              
              
            
            console.log(numericValue)
            console.log("finalNumber:",numericValue)
            console.log("type of finalNumber",typeof(numericValue))
              const readText=readArticleOneByOne(numericValue-1)
            speak({text:readText,rate: 0.7,voice:voices[3]})
            
             
            




         
          }
        }

       
      ]
      const ReadingTitle=(textToRead)=>{        
        
    speak({text:textToRead,rate: 0.7,voice:voices[3]})     
      }
    

      function readArticleOneByOne(i){
        const title_text=document.getElementsByName('title-text')
        const cards=document.getElementsByClassName('card-body')
        
        Array.from(cards).forEach(element => {
          console.log(element)
          element.style.border='0px'
          element.style.borderRadius='0px'
        });   
        // title_text[0].innerHTML.style.color='red'
        cards[i].style.borderBottom='15px solid red'
        cards[i].style.borderRadius='27px'
        
        // cards[i].style.backgroundColor='red'
        console.log(cards)
        const readingText=[];
            title_text.forEach(element => {
              readingText.push(element.innerText)
            });
            
            return readingText[i]

      }

    
      function onend(){
        cancel()
      }
        



    
      
      

    const {
        transcript,
    
        listening,
        interimTranscript,
      finalTranscript,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({commands});
    





      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    const handleLogoClicked=()=>{
        if(showsearch==='none'){
          startRecognition()
        
        }
        else{
          stopRecognition()
        }
        handleSearch()
        
      }
     



    function startRecognition(){
     
        speak({text:"Jarvis is activated",rate: 0.9,voice:voices[3]})
        
        SpeechRecognition.startListening({ continuous: true })
        
        
        
      }
      
    
      
    function stopRecognition(){

      SpeechRecognition.stopListening()
      
      speak({text:"Jarvis is shutting down",rate: 0.9,voice:voices[3]})
      
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
    
    
    

      const logostyle={
        animationName:`${animationname}`
       }
       
       const mystyle={
         display:`${showsearch}`,
        }
        // console.log(listening)
       
        const btn=document.getElementsByClassName('btn btn-primary');
        console.log(btn)
       
       
  return (
    <>
   <div className="popup">
   {/* <!-- Button trigger modal --> */}
<button style={{borderRadius:"43px",border:"2px solid yellow"}} id='help' type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ?
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Instructions</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <ol>
          <li>you can listen articles by saying 'read articles' </li>
          <li>you can listen specific news by saying 'read news 4' etc</li>
          <li>you can also navigate to other pages like sports business etc by saying 'open health page' etc.</li>
          <li>you can enabled dark mode by saying 'enable dark mode</li>
          <li>'stop' when reading articles</li>
          <li>'close jarvis' closing jarvis</li>
        </ol>
      
       
      
      
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
   </div>
    <div id='logo_box' className="logo-search-box">
        
       <input value={interimTranscript}  readOnly type="search" style={mystyle} name="srch" id="srch" />
           
       <img onClick={handleLogoClicked}   style={logostyle}   src={logo} alt="Logo" id='logo' />
           
     </div>
    </>
  )
}
