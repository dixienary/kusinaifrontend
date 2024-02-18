import {useEffect,useState, useContext} from "react"
import axios from "axios"
import UserInfoContext from "../../../context/UserInfo/UserInfoContext"

const History = () => {
    const [data, setData] = useState()
    const {userInfo, setUserInfo} = useContext(UserInfoContext)
    useEffect(() => {
        console.log(userInfo.username)
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api-3zpg6pzal-mrgreenxgreens-projects.vercel.app/api/v1/convo/intent/all/sample@gmail.com`);
            console.log(response.data)
            setData(response.data); // Update state with the fetched data
          } catch (error) {
            console.error(error);
            // Handle error appropriately, e.g., display an error message
          }
        };
    
        fetchData();
        }, []); // Run the effect only once after component mounts
        

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"black"}}>
        History
         
        {data.length > 0 && ( // Check if data is available before rendering
        <ul>
          {data.map((message) => (
            <li key={message._id} style={{ color:" #8c8c8c"}}>
         🗭  {message.botMessage.intent} 
              {/* <b>Intent:</b> {message.botMessage.intent} - <b>Created At:</b>{" "}
              {message.createdAt.toLocaleString()} */}
            </li>
          ))}
        </ul>
      )}
       
    </div>
  )
}

export default History