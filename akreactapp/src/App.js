import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Navbar } from "./components/pages/Navbar";
import OrderSummery from "./components/pages/OrderSummery";
import NoMatchFound from "./components/pages/NoMatchFound";
import Products from "./components/pages/Products";
import ProductsFeatured from "./components/pages/ProductsFeatured";
import ProductsNew from "./components/pages/ProductsNew";
import Users from "./components/pages/Users";
import UserDetails from "./components/pages/UserDetails";
import Admin from "./components/pages/Admin";
import Profile from "./components/pages/Profile";
import { AuthProvider } from "./components/pages/Auth";
import Login from "./components/pages/Login";
import ReqAuth from "./components/pages/ReqAuth";
// const LazyAbout = React.lazy(() => import("./components/pages/About"));

function App() {
  console.log("master branch")
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <AuthProvider>
        <Navbar />
        <div style={{ marginLeft: "30px", marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="order-summery" element={<OrderSummery />} />
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsFeatured />} />
              <Route path="featured" element={<ProductsFeatured />} />
              <Route path="new" element={<ProductsNew />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<UserDetails />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="profile" element={<ReqAuth><Profile /></ReqAuth>} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoMatchFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
