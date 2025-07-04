import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Products" />
      </div>
      <nav style={{ margin: "10px" }}>
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
