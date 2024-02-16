// import axios from "axios"
// import {useState}  from "react"

// const XYZ = ()=>{
//     const [data, setData] = useState()
//     let x;
    
//     const getIntent = async ()=>{
//         try{ 
//             const response = await axios.get('http://localhost:5000/api/v1/convo/intent')
//             console.log(response.data);
//             console.log(response.status);
//             console.log(response.statusText);
//             console.log(response.headers);
//             console.log(response.config);

//             x = response
//         }catch (error) {
//         // Handle error
//         console.error(error);
//         }
//     };
//     //invoke
//     getIntent()
//     // console.log(x)
//     // console.log(typeof(data))
  


//     return (
//         <div>
//                {
//                 .map((message)=>(
//                     <li key={message._id} style={{color:"red"}}>
//                     <b>Intent:</b> {message.botMessage.intent} - <b>Created At:</b>{" "}
//                     {message.createdAt.toLocaleString()}
//                   </li>
//                 ))
//                } 

//                {
                   
            
//                }
//         </div>
//     )
// }

// export default XYZ


import axios from "axios";
import { useState, useEffect } from "react";

const XYZ = () => {
  const [data, setData] = useState([]); // Set initial state to an empty array

  // Use useEffect to fetch data after component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/convo/intent");
        setData(response.data); // Update state with the fetched data
      } catch (error) {
        console.error(error);
        // Handle error appropriately, e.g., display an error message
      }
    };

    fetchData();
  }, []); // Run the effect only once after component mounts

  return (
    <div>
      {data.length > 0 && ( // Check if data is available before rendering
        <ul>
          {data.map((message) => (
            <li key={message._id} style={{ color: "red" }}>
              <b>Intent:</b> {message.botMessage.intent} - <b>Created At:</b>{" "}
              {message.createdAt.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default XYZ;
