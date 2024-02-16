import Header from "../../layouts/Header"
import Main from "../../layouts/Main"
import {useContext} from "react"
import UserPortalContext from "../../../context/UserPortal/UserPortalContext"


const App = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(UserPortalContext);
  console.log("test ini")
  console.log(isLoggedIn)
  return (
    <div>
      <Header/>
      <Main/>
      <button
       onClick={()=>{setIsLoggedIn(true)}}
       style={{position:"absolute", zIndex:"999",background:"red",width:"200px"}}>
        {}
        sdfsd
      </button>
    </div>
  )
}

export default App