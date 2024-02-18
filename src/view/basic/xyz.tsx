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

import "./xyz.css"


const XYZ =  () => {
  
  

  return (
   <div style={{width:"500px"}}>
    <div className="container">
      <p className="text">
        The quick brown fox jumped over the lazy dog.
      </p>
    </div>

   </div>
  );
};

export default XYZ;
