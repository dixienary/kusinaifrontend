import Header from "../../layouts/Header"
import Main from "../../layouts/Main"
import {useContext, useEffect} from "react"
import UserPortalContext from "../../../context/UserPortal/UserPortalContext"
import { useNavigate } from "react-router-dom"
import Login from "../login/Login"
import Home from "../home/Home"


const App = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(UserPortalContext);
  const navigate = useNavigate()

  const xString = localStorage.getItem("isLoggedIn")
  const isLog = xString === "true";  
  console.log("test ini")
  
 

  return (
    <div>
      {!isLog?
        (
          <Home/>
        ):
        (
            <div>
            <Header/>
            <Main/>
            </div>
        )

      }
    
    
    </div>
  )
}

export default App