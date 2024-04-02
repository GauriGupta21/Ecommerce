import React, { useContext, useState } from "react";
import ProductContext from "../../Context/ProductContext";

export default function CreateProduct() {
  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    description: "",
    stock: "",
    price: "",
  });

  const productContext = useContext(ProductContext);
  const { createProduct } = productContext;
  const onChange = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(productDetails);
    setproductDetails({
      name: "",
      image: "",
      description: "",
      stock: "",
      price: "",
    });
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
        Create a product
      </h1>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Name
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            name="image"
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            name="description"
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            name="price"
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Stock
          </label>
          <input
            name="stock"
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword5"
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
