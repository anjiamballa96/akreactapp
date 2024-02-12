import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummery = () => {
    const navigate = useNavigate()
  return (
    <>
      <div>OrderSummery</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

export default OrderSummery;
