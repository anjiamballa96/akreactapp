import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Users from "../pages/Users";

export const nav = [
    {path : "/",name:"Home",element : <Home />,isMenu: true,isPrivate : false},
    {path : "/admin",name:"Admin",element : <Admin />,isMenu: true,isPrivate : false},
    {path : "/login",name:"Login",element : <Login />,isMenu: false,isPrivate : false},
    {path : "/layout",name:"Lay out",element : <Layout />,isMenu: true,isPrivate : true},
    {path : "/users",name:"Users",element : <Users />,isMenu: true,isPrivate : true},
]