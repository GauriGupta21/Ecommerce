import React, { useContext, useState } from "react";
import ProductContext from "../../Context/ProductContext";

export default function UpdateProduct() {
  const [productDetails, setproductDetails] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    stock: "",
    price: "",
  });

  const productContext = useContext(ProductContext);
  const { updateProduct } = productContext;
  const onChange = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productDetails);
    setproductDetails({
      id: "",
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
        Update product information
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
            value={productDetails.id}
            type="text"
            className="form-control"
            id="exampleInputEmail13"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={productDetails.name}
            onChange={(e) => {
              onChange(e);
            }}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail8"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Image
          </label>
          <input
            value={productDetails.image}
            onChange={(e) => {
              onChange(e);
            }}
            name="image"
            type="text"
            className="form-control"
            id="exampleInputEmail9"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            value={productDetails.description}
            onChange={(e) => {
              onChange(e);
            }}
            name="description"
            type="text"
            className="form-control"
            id="exampleInputEmail10"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail11" className="form-label">
            Stock
          </label>
          <input
            value={productDetails.stock}
            onChange={(e) => {
              onChange(e);
            }}
            name="stock"
            type="text"
            className="form-control"
            id="exampleInputEmail7"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail12" className="form-label">
            Price
          </label>
          <input
            value={productDetails.price}
            onChange={(e) => {
              onChange(e);
            }}
            name="price"
            type="text"
            className="form-control"
            id="exampleInputEmail7"
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
