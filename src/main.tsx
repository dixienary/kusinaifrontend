import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import "tw-elements-react/dist/css/tw-elements-react.min.css";  
import UserPortalContextProvider from './context/UserPortal/UserPortalContextProvider'
import UserInfoContextProvider from './context/UserInfo/UserInfoContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //removing stringmode for production purposes
  // <React.StrictMode>
  <UserPortalContextProvider>
    <UserInfoContextProvider>
    <RouterProvider router={router} />
    </UserInfoContextProvider>
  </UserPortalContextProvider> 
  // </React.StrictMode>
)
