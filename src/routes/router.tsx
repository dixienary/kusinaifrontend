//createBrowserRouter is a built-in method from react-router-dom 
//that allows us to create routes. It is the recommended way by maintainers of react-router-dom
import { createBrowserRouter } from "react-router-dom"
//import components to be used for routing
import Home from "../view/pages/home/Home"
import Login from "../view/pages/login/Login"
import Register from "../view/pages/register/Register"
import LoginMain from "../view/pages/login/LoginMain"
import App from "../view/pages/app/App"
import XYZ from "../view/basic/xyz"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path:"/app",
        element:<App/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/login/:email",
        element:<LoginMain/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/sample",
        element:<XYZ/>
    }
]) 

export default router