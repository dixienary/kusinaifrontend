import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import CSS from "./Login.module.css"
import robotchefImage from './robot.png';
import { useNavigate } from "react-router-dom";
import UserInfoContext from "../../../context/UserInfo/UserInfoContext";
import {useContext,useState,useEffect} from "react"
import axios from "axios"
import UserPortalContext from "../../../context/UserPortal/UserPortalContext";

const LoginMain = () => {
    const navigate = useNavigate()
    const {userInfo, setUserInfo} = useContext(UserInfoContext);
    const {isLoggedIn, setIsLoggedIn} = useContext(UserPortalContext)
    const [username,setUsername] = useState(userInfo.username)
    const [password, setPassword] = useState()

    const handleLogin = async (e)=>{
      e.preventDefault()
      console.log(userInfo)
      try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/login', userInfo
        );
        console.log("check")
        console.log(response)
        if (response.status == 200) {
          console.log("login success")
          setUserInfo({username:response.data.username,user:response.data.name,password:response.data.password,role:"client"})
          setIsLoggedIn(true)
          localStorage.setItem("userInformation",JSON.stringify({username:response.data.username,user:response.data.name,password:response.data.password,role:"client"}))
          localStorage.setItem("isLoggedIn",JSON.stringify(true))
          navigate("/app")
          // Handle successful registration (e.g., redirect to login page)
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log('An error occurred. Please try again later.');
        console.error('Error:', error);
      }
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
                     style={{width:"300px",padding:"10px",display:"flex"}}
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
                <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <div onClick={handleLogin}><Button>Proceed</Button></div>
                <div onClick={()=>{navigate("/login")}}><Button2 className="bg-light" >Back</Button2></div>
                </div>
            </form>
            <small>Don't have an account?</small>         
            <div onClick={logCheck}><Button2 className="bg-light" >Register</Button2></div>
        </div>

    </div>
  )
}

export default LoginMain