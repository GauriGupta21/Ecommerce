import React, { useEffect, useState } from "react";
import WishlistProductCard from "../Product/WishlistProductCard";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("wishlist") &&
      JSON.parse(localStorage.getItem("wishlist")).length != 0
    ) {
      setArr(JSON.parse(localStorage.getItem("wishlist")));
    } else {
      alert("Wishlist is empty");
      navigate("/");
    }
  }, []);
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
          marginTop: "10px",
        }}
      >
        Your Wishlist
      </h1>
      <div className="d-flex flex-wrap">
        {arr.map((ele) => {
          return <WishlistProductCard product={ele} key={ele._id} />;
        })}
      </div>
    </>
  );
}
