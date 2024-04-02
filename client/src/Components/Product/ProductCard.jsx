import React, { useContext } from "react";
import OrderContext from "../../Context/OrderContext";
import ProductContext from "../../Context/ProductContext";

export default function ProductCard({ product }) {
  const orderContext = useContext(OrderContext);
  const { createOrder } = orderContext;
  const productContext = useContext(ProductContext);
  const { wishlist } = productContext;
  return (
    <>
    
      <div
        className="mx-auto"
        style={{
          width: "18rem",
          border: "1px solid darkgray",
          marginBottom: "25px",
          marginLeft:"25px",
          marginRight:"25px"
        }}
      >
        <div style={{ width: "100%" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover",height:"200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "17rem",
              height: "30px",
              marginLeft: "10px",
            }}
          >
            <h6
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {product.name}
              <p style={{ display: "flex", justifyContent: "space-around" }}>
                Rs {product.price}
              </p>
            </h6>
          </div>
          <p
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
              height: "20px",
              fontSize: "13px",
              marginTop:"19px"

            }}
          >
            {product.description}
          </p>

          <button
            style={{ marginBottom: "10px", width: "253px", marginLeft: "16px" }}
            onClick={() => {
              wishlist(product);
            }}
          >
            Wishlist
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <a
              onClick={() => {
                createOrder(product);
              }}
              href="#"
              className="btn btn-primary mx-3"
            >
              Add to cart
            </a>
            <a href="#" className="btn btn-primary mx-3">
              Buy
            </a>

            {/* {console.log(product._id)} */}
          </div>
        </div>
      </div>
    </>
  );
}
