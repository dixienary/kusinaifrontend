import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import CSS from "./Login.module.css"
import robotchefImage from './robot.png';
import { useNavigate } from "react-router-dom";
import UserInfoContext from "../../../context/UserInfo/UserInfoContext";
import {useContext,useState,useEffect} from "react"
const LoginMain = () => {
    const navigate = useNavigate()
    const {userInfo, setUserInfo} = useContext(UserInfoContext);
    const [username,setUsername] = useState(userInfo.username)
    const [password, setPassword] = useState()

    const handleLogin = (e)=>{
      e.preventDefault()
      console.log(userInfo)
     }

     useEffect(()=>{
      setUserInfo( {username:username, password:password,role:"client"})   
     },[username,password])
    
    const handleUserName = (e)=>{
      e.preventDefault()
      setUsername(e.target.value)
    }
    const handlePassword = (e)=>{
      e.preventDefault()
      setPassword(e.target.value)
      console.log(password)
    }
 
  
    const logCheck = (e)=>{
        // console.log("Hello")
        navigate("/register")
    }
  return (
    <div className={CSS.layout}>
        <div className={CSS.container}>
        <img src={robotchefImage} style={{ height: "150px", width: "150px",}} />

            <h1 className={CSS.welcome}>Enter your password</h1>
            <form>
                
                    <TEInput
                     type="email"
                     value={userInfo.username}
                     id="email"
                     label="Email"
                     size="lg"
                     required
                     style={{width:"300px"}}
                     onChange={handleUserName}
                      ></TEInput>
                   <TEInput
                     type="password"
                     id="password"
                     label="Password"
                     size="lg"
                     required
                     style={{width:"300px"}}
                     onChange={handlePassword}
                    ></TEInput>
                  
                     
                
                <div onClick={handleLogin}><Button>Proceed</Button></div>
           
            </form>

          

            <small>Don't have an account?</small>         
            <div onClick={logCheck}><Button2 className="bg-light" >Register</Button2></div>
        </div>

    </div>
  )
}

export default LoginMain