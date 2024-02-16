import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import robotchefImage from './robot.png';
import { useNavigate } from "react-router-dom";
import UserInfoContext from "../../../context/UserInfo/UserInfoContext";
import {useContext,useState,useEffect} from "react"
import CSS from "./Register.module.css"
import axios from "axios"
// const Register = () => {
//     const navigate = useNavigate()

//     const [message, setMessage] = useState<string>("")
//     const [username,setUsername] = useState<string>("")
//     const [userpassword,setUserPassword] = useState<string>("")
//     const [confirmPassword,setConfirmPassword] = useState<string>("") 
  
//     const handleUsername = (e)=>{
//       e.preventDefault()
//       const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       const isValid = emailRegex.test(e.target.value)
//       if(!isValid){
//         setMessage("Enter valid email")
//       }else{
//         setMessage("")
//       }
//       setUsername(e.target.value)
//     }

//     const handlePassword = (e)=>{
//       e.preventDefault()
//       setUserPassword(e.target.value)
//       console.log(userpassword)
//     }

//     const handleConfirmPassword = (e)=>{
//       e.preventDefault()
//       setConfirmPassword(e.target.value)
//       if(userpassword!=confirmPassword){
//         console.log("xxxxxx")
//         setMessage("Password does not match")
//       }else if(userpassword == confirmPassword){
//         setMessage("")
//         console.log("match")
//       }
//       console.log(userpassword+" "+confirmPassword)
//     }

 
//   return (
//     <div className={CSS.layout}>
//         <div className={CSS.container}>
//         <img src={robotchefImage} style={{ height: "150px", width: "150px",}} />

//             <h1 className={CSS.welcome}>Registration</h1>
           
//             <form>
                
//                     <TEInput
//                      type="email"
//                      id="email"
//                      label="Email"
//                      size="lg"
//                      required
//                      style={{width:"300px"}}
//                      onBlur={handleUsername}
//                       ></TEInput>
//                     <TEInput
//                      type="password"
//                      id="password"
//                      label="Password"
//                      size="lg"
//                      required
//                      style={{width:"300px"}}
//                      onBlur={handlePassword}
//                     ></TEInput>
//                      <TEInput
//                      type="password"
//                      id="confirmPassword"
//                      label="Confirm Password"
//                      size="lg"
//                      required
//                      style={{width:"300px"}}
//                      onBlur={handleConfirmPassword}
//                     ></TEInput>
//                      <div style={{color:"red"}}>{message}</div>
//                 <div><Button>Proceed</Button></div>
           
//             </form>

          

//             <small>Don't have an account?</small>         
//         </div>

//     </div>
//   )
// }

// export default Register



const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("client")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Use "password" for clarity
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const x = {
    username:username,
    password:password,
    role:"client"
  }

  const handleUsername = (event) => {
    // Ensure validation is performed when typing or leaving the field
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegex.test(event.target.value);

    if (!isValid) {
      setMessage('Enter a valid email address.');
    } else {
      setMessage('');
    }

    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value); // No need for extra console.log
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setMessage('Password must be at least 8 characters long and contain a lowercase letter, uppercase letter, and a number.');
    
    }
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);

    if (password != confirmPassword) {
      setMessage('Passwords do not match.');
    } else if(password==confirmPassword){
      setMessage('');
    } 
    
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setMessage('Password must be at least 8 characters long and contain a lowercase letter, uppercase letter, and a number.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("click!")

    

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', x
      );

      if (response.status == 200) {
        setMessage('Registration successful!');
        navigate("/login")
        // Handle successful registration (e.g., redirect to login page)
      } else {
        setMessage(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className={CSS.layout}>
      <div className={CSS.container}>
        <img src={robotchefImage} style={{ height: "150px", width: "150px", }} />

        <h1 className={CSS.welcome}>Registration</h1>

        <form >
          <TEInput
            type="email"
            id="email"
            label="Email"
            size="lg"
            required
            style={{ width: "300px" }}
            onBlur={handleUsername}
            value={username}
            onChange={handleUsername} // Update state on change
          />
          <TEInput
            type="password"
            id="password"
            label="Password"
            size="lg"
            required
            style={{ width: "300px" }}
            onBlur={handlePassword}
            value={password}
            onChange={handlePassword}
          />
          <TEInput
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            size="lg"
            required
            style={{ width: "300px" }}
            onBlur={handleConfirmPassword}
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <div style={{ color: "red",width:"30vw",textAlign:"center"}}>{message}</div>
          <div onClick={handleSubmit}><Button type="submit" >Register</Button></div>
        </form>

        <small>Don't have an account?</small>
      </div>
    </div>
  );
};

export default Register;
