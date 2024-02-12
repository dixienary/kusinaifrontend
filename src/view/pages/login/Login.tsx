import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import CSS from "./Login.module.css"
import robotchefImage from './robot.png';
import GoogleIcon from "../../assets/google.svg"
import FacebookIcon from "../../assets/facebook.svg"
import Who from "../../assets/who.png"
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const logCheck = (e)=>{
        e.preventDefault()
        console.log("Hello")
        navigate("/login/x")
    }
  return (
    <div className={CSS.layout}>
        <div className={CSS.container}>
        <img src={robotchefImage} style={{ height: "150px", width: "150px",}} />

            <h1 className={CSS.welcome}>Welcome to Kusin-AI</h1>
            <form>

                
                    <TEInput
                     type="email"
                     id="email"
                     label="Email"
                     size="lg"
                     required
                     style={{width:"300px"}}
                    ></TEInput>
                    
                
                <div onClick={logCheck}>
                        <Button>Proceed</Button>
                </div>

           
            </form>

            <fieldset className={CSS.socialLoginBox}>
                <legend>or</legend>
                {/* <small>sign in via:</small> */}
                <div onClick={logCheck}>
                    <Button2  >
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <img src={GoogleIcon} alt="Your SVG" style={{height:"20px"}} />
                            <p>Continue with Google</p>
                            <div></div>
                        </div>
                    </Button2>
                    </div> 
                <div onClick={logCheck}>
                    <Button2  >
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <img src={FacebookIcon} alt="Your SVG" style={{height:"20px"}} />
                            <p>Continue with Google</p>
                            <div></div>
                        </div>
                    </Button2>
                </div>

            </fieldset>

            <small>Don't have an account?</small>
            <div onClick={logCheck}><Button2 className="bg-light" >Register</Button2></div>
           
        </div>

    </div>
  )
}

export default Login