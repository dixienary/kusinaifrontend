import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import CSS from "./Login.module.css"
import robotchefImage from './robot.png';
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
    const navigate = useNavigate()

    const logCheck = (e)=>{
        e.preventDefault()
        console.log("Hello")
        navigate("/app")
    }
  return (
    <div className={CSS.layout}>
        <div className={CSS.container}>
        <img src={robotchefImage} style={{ height: "150px", width: "150px",}} />

            <h1 className={CSS.welcome}>Enter your password</h1>
            <form>
                
                    <TEInput
                     type="email"
                     id="email"
                     label="Email"
                     size="lg"
                     required
                     style={{width:"300px"}}
                    ></TEInput>
                   <TEInput
                     type="password"
                     id="password"
                     label="Password"
                     size="lg"
                     required
                     style={{width:"300px"}}
                    ></TEInput>
                     
                
                <div onClick={logCheck}><Button>Proceed</Button></div>
           
            </form>

          

            <small>Don't have an account?</small>         
            <div onClick={logCheck}><Button2 className="bg-light" >Register</Button2></div>
        </div>

    </div>
  )
}

export default LoginMain