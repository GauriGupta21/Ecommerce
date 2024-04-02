import React, { useContext, useState } from "react";
import ProductContext from "../../Context/ProductContext";

export default function CancelOrder() {
  const [productDetails, setproductDetails] = useState({
    id: "",
  });
  const productContext = useContext(ProductContext);
  const { cancelProduct } = productContext;
  const onChange = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cancelProduct(productDetails);
    // console.log(productDetails);
  };
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
        Cancel Order
      </h1>
      <form className="container">
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Enter Product Id To Cancel Order
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="id"
            type="text"
            className="form-control"
            id="exampleInputEmail6"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
