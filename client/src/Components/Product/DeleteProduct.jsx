import React, { useContext, useState } from "react";
import ProductContext from "../../Context/ProductContext";

export default function DeleteProduct() {
  const [productDetails, setproductDetails] = useState({
    id:""
  });

  const productContext = useContext(ProductContext);
  const { deleteProduct } = productContext;
  const onChange = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setproductDetails({ id: "" });
    deleteProduct(productDetails);

    // console.log(productDetails);
  };
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
        Delete a product
      </h1>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Id
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
    </>
  );
}
