import {  useState} from "react"
import UserPortalContext from "./UserPortalContext"




const UserPortalContextProvider = (prop) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <UserPortalContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {prop.children}
    </UserPortalContext.Provider>
  )
}

export default UserPortalContextProvider
