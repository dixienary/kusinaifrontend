import Button from "../../basic/button/Button"
import Button2 from "../../basic/button/Button2";
import { TEInput } from "tw-elements-react";
import robotchefImage from './robot.png';
import { useNavigate } from "react-router-dom";
import UserInfoContext from "../../../context/UserInfo/UserInfoContext";
import {useContext,useState,useEffect} from "react"
import CSS from "./Register.module.css"
import axios from "axios"


const Account = () => {
  //function variable to redirect
  const navigate = useNavigate();
  //context
   const userInformation = JSON.parse(localStorage.getItem("userInformation"))
  //basic info to register
  const [role, setRole] = useState("client")
  const [name, setName] = useState(userInformation.user);
  const [password, setPassword] = useState(userInformation.password); 
  const [confirmPassword, setConfirmPassword] = useState(userInformation.password);
  //validation prompt
  const [message, setMessage] = useState('');
  //x - data wrapper for fetching
  const x = {
     username:userInformation.username,
    name:name,
    password:password,
    role:"client"
  }

  const handleName = (event)=>{
    setName(event.target.value)
  }

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
    // try {
    //   const response = await axios.post('http://localhost:5000/api/v1/auth/updateAccount', x
    //   );
    //   if (response.status == 200) {
    //     setMessage('Registration successful!');
    //     navigate("/login")
    //     // Handle successful registration (e.g., redirect to login page)
    //   } else {
    //     setMessage(response.data.message || 'Registration failed. Please try again.');
    //   }
    // } catch (error) {
    //   setMessage('An error occurred. Please try again later.');
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className={CSS.layout}>
      <div className={CSS.container}>
        <img src={robotchefImage} style={{ height: "150px", width: "150px", }} />
        <h1 className={CSS.welcome}>Account</h1>
        <form >
          <TEInput
            type="email"
            id="email"
            label="Email"
            size="lg"
            required
            style={{ width: "300px" }}
            value={userInformation.username}
           disabled
          />
           <TEInput
            type="text"
            id="name"
            label="Name"
            size="lg"
            required
            style={{ width: "300px" }}
            onBlur={handleName}
            value={name}
            onChange={handleName} // Update state on change
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
          <div onClick={handleSubmit}><Button type="submit" >Save</Button></div>
        </form>
      </div>
    </div>
  );
};

export default Account;
