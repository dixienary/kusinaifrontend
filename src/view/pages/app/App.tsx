import Header from "../../layouts/Header"
import Main from "../../layouts/Main"
import { useContext } from "react"
import UserPortalContext from "../../../context/UserPortal/UserPortalContext"
import Home from "../home/Home"


const App = () => {
  useContext(UserPortalContext);

  const xString = localStorage.getItem("isLoggedIn")
  const isLog = xString === "true";


  return (
    <div>
      {!isLog ?
        (
          <Home />
        ) :
        (
          <div>
            <Header />
            <Main />
          </div>
        )
      }
    </div>
  )
}

export default App