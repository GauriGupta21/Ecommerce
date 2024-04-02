import React from "react";
import { useContext } from "react";
import { useState } from "react";
import OrderContext from "../../Context/OrderContext";

export default function PlaceOrder() {
  const orderContext = useContext(OrderContext);
  const { addToCart } = orderContext;
  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNo: "",
  });
  const onChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(shippingDetails);
    addToCart(shippingDetails);
  };

  return (
    <>
      <form className="container my-5">
        <h1 className="my-3">Shipping Details</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Shipping address
          </label>
          <input
            name="address"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.address}
            type="text"
            className="form-control"
            id="exampleInputEmail20"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            City
          </label>
          <input
            name="city"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.city}
            type="text"
            className="form-control"
            id="exampleInputEmail19"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            State
          </label>
          <input
            name="state"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.state}
            type="text"
            className="form-control"
            id="exampleInputEmail18"
            aria-describedby="emailHelp"
          />
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Country
          </label>
          <input
            name="country"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.country}
            type="text"
            className="form-control"
            id="exampleInputEmail17"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Pin code
          </label>
          <input
            name="pinCode"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.pinCode}
            type="text"
            className="form-control"
            id="exampleInputEmail16"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone No
          </label>
          <input
            name="phoneNo"
            onChange={(e) => {
              onChange(e);
            }}
            value={shippingDetails.phoneNo}
            type="text"
            className="form-control"
            id="exampleInputEmail15"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Proceed
        </button>
      </form>
    </>
  );
}
