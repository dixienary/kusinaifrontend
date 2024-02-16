import CSS from "./Chatbox.module.css"
import {useState, useEffect,useRef} from "react";
import { BotResponse } from "./BotResponse";
import axios from "axios"
import SendSVG from "../../assets/send.png"
import BotAvatar from "../../assets/robotchef.png"
import HistoryBox from "../historybox/HistoryBox";

interface convoInterface{
    userMessage:string,
    botMessage:{
      intent:string,
      response:string,
      img:string,
      title:string,
      instruction:string,
      fallback:string
    }
}
interface intentInterface{
    date:string,
    intent:string,
    isDeleted:boolean
}

const Chatbox = () => {
    //computer response
    const [message, setMessage] = useState<object>({
      intent:"",
      response:"",
      img:"",
      title:"",
      instruction:"",
      fallback:""
    });
    //the current not yet complete user question
    const [ prompt, setPrompt] = useState<string>("");
    //the complete user question
    const [displayPrompt, setDisplayPrompt] = useState<string>("")
    //contains all session convo
    const [convo , setConvo] = useState<Array<convoInterface>>([{
        userMessage:"",
        botMessage:{
          intent:"",
          response:"What are your ingredients today?",
          img:"",
          title:"",
          instruction:"",
          fallback:""
        }
    }])
    //intent state
    const [intent, setIntent] = useState<Array<string>>([""])
    
    const convoRef = useRef(null)

    //changes the input/prompt state to blank to remove the typed characters, then set the value of prompt to displayPrompt state
    //setMessage in invokes BotResponse that returns the bot message depending on the passed prompt(user) message.
    const handleGo = (e): void => {
        setPrompt("")
        setDisplayPrompt(prompt)
        setMessage(BotResponse(prompt))
    }
    const handleKeyDown = (e):void =>{
      if (e.key === 'Enter') {
        // Prevent the default action of the Enter key
        e.preventDefault();
        setPrompt("")
        setDisplayPrompt(prompt)
        setMessage(BotResponse(prompt)) 
      }
    }
    const handleIntent = (e):void=>{
      setIntent([...intent,e.target.value])
    }
    //if displayPrompt changes set/add the new user message to the convo array then adjust scroll
    useEffect(()=>{
        // add the user and bot message to database every new prompt
        // axios.post()
        const x = { userMessage:displayPrompt,botMessage:message}
        try {
            const response =  axios.post(
              // 'http://localhost:5000/api/v1/convo', // Replace with your actual API endpoint
              'http://localhost:5000/api/v1/convo',
              JSON.stringify(x), // Data to send in the request body
              {
                headers: {
                  // Add any necessary headers, e.g., for authentication
                  'Content-Type': 'application/json', // Ensure Content-Type is set for JSON data
                },
              }
            );
            // Handle successful respons
            // console.log('Response data:', response.data);
            // Update UI or clear form data
          } catch (error) {
            // Handle errors
            console.error('Error:', error);
            // Display an error message to the user
          }
        // axios.post("http:localhost:5000/api/v1/convo",JSON.stringify(x))
        // axios.post("https://api-two-sandy.vercel.app/convo",x)
        // setIntent([...intent, {date:"now",intent:"okay", isDeleted:false}])
        setConvo([...convo, {userMessage:displayPrompt, botMessage:message}])
        convoRef.current.scrollTo(0,convoRef.current.offsetHeight * convoRef.current.offsetHeight  );
    }, [displayPrompt])

    //check convo
    console.log(convo)
    
  return (
    <div className={CSS.container}>
        <div className={CSS.history}>
            <HistoryBox/> 
          <br/>
        </div>
        <div className={CSS.box}>
            <div className={CSS.convo} ref={convoRef}>
              {/* initial message */}
              <div style={{marginTop:"5em"}}>
                    <img src={BotAvatar} alt="Your SVG" style={{height:"50px"}} />
                    <div style={{left:"0px",borderRadius:"15px",background:"linear-gradient(30deg,#222, #0d0d0d)",padding:"20px"}}>
                          <div className={CSS.greetings}> 
                            Hello, Name
                          </div>
                          <p style={{fontSize:"30px"}}>
                            {convo[0].botMessage.response}
                          </p>
                    </div> 
              </div>
                {/* convo */}
                {
                    convo.map((convo,index)=>{
                     
                      return index === 0 || index === 1? <div></div>:
                      (
                        <div>
                          {/* user message */}
                          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end",marginTop:"2em"}}>
                          <div style={{background:"green",width:"50px",height:"50px",borderRadius:"50%",overflow:"hidden"}}></div><br/>
                          <div style={{marginRight:"2em"}}>
                                {convo.userMessage}
                          </div>
                          </div> 
                          {/* bot message */}
                          <img src={BotAvatar} alt="Your SVG" style={{height:"50px"}} />
                         
                          <div style={{left:"0px",borderRadius:"15px",background:"linear-gradient(30deg,#222, #0d0d0d)",padding:"20px"}}>
                            <div> {convo.botMessage.fallback}</div>
                            {convo.botMessage.response}
                          
                            <img src={convo.botMessage.img}  style={{marginTop:"2em",marginBottom:"2em"}}/>
                            <h1><b>{convo.botMessage.title}</b></h1>
                            {convo.botMessage.instruction}
                            <div style={{color:"green"}}>{
                              <input type="text"  value={convo.botMessage.intent}  onBlur={handleIntent}/>
                        
                            }</div>
                           </div>  
                        </div>
                    )
                  })
                }

                <div style={{height:"500px",background:"",}}>
                </div>
            </div>
            <div className={CSS.promptContainer}>
                <input 
                  type="text" 
                  placeholder="Enter a prompt here" 
                  className={CSS.prompt} 
                  value={prompt} 
                  onChange={(e)=>{setPrompt(e.target.value)}}
                  onKeyDown={handleKeyDown}
                  />
                <button onClick={handleGo} className={CSS.promptButton} >
                <img src={SendSVG} alt="Your SVG" style={{height:"50px"}} />
                </button>
            </div>
        </div>
                           
    </div>
                )
  }
  
export default Chatbox