import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../Context/ProductContext";
import ProductCard from "./Product/ProductCard";

export default function Home() {
  const productContext = useContext(ProductContext);
  const { getAllProduct } = productContext;
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getAllProduct(setArr);
  }, []);

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
          marginTop: "10px",
          textDecoration: "underline",
          textDecorationThickness: "2px",
        }}
      >
        Welcome {localStorage.getItem("username")}
      </h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
          marginTop: "10px",
        }}
      >
        {" "}
        Let's Shop Your Favrourite Products
      </h2>
      <div className="d-flex flex-wrap">
        {arr.map((ele) => {
          return <ProductCard product={ele} key={ele._id} />;
        })}
      </div>
      {/* {console.log(arr)} */}
    </>
  );
}
