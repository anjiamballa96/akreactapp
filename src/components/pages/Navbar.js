import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Navbar = () => {
    const auth = useAuth()
    const navigate = useNavigate()

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};
