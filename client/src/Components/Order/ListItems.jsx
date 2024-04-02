import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";

export default function ListItems() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("orderArr")));
  }, []);
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "50px",
          marginTop:"20px"
        }}
      >
        Your Cart
      </h1>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {arr.map((ele) => {
            return <ProductCard product={ele} key={ele._id} />;
          })}
        </div>
        <div
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "#0d6efd",
            display: "flex",
            borderRadius: "5px",
            marginLeft: "45px",
          }}
        >
          <Link
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "10px",
              marginLeft: "8px",
            }}
            to="/placeOrder"
          >
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
}
