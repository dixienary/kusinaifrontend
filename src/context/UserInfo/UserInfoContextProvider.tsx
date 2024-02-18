import {  useState} from "react"
import UserInfoContext from "./UserInfoContext"


interface userInfoInterface{
  username:string,
  name:string,
  password:string,
  role:string,
}


const UserInfoContextProvider = (prop) => {
    const [userInfo, setUserInfo] = useState<userInfoInterface>({ })
  return (
    <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        {prop.children}
    </UserInfoContext.Provider>
  )
}

export default UserInfoContextProvider
