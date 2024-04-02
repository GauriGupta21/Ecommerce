import React, { useContext } from "react";
import OrderContext from "../../Context/OrderContext";
import ProductContext from "../../Context/ProductContext";

export default function WishlistProductCard({ product }) {
  const orderContext = useContext(OrderContext);
  const { createOrder } = orderContext;
  const productContext = useContext(ProductContext);
  const { deleteWishlist } = productContext;
  return (
    <>
      <div
        className="card m-3"
        style={{
          width: "18rem",
          border: "1px solid darkgray",
          marginBottom: "15px",
        }}
      >
        <div style={{ width: "100%" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover", height: "200px" }}
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
              display: "flex",
            }}
          >
            <h6
              className="card-title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "209px",
              }}
            >
              {product.name}
            </h6>
            <p
              className="card-text"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              Rs {product.price}
            </p>
          </div>
          <p
            className="card-text"
            style={{
              paddingLeft: "4px",
              paddingRight: "4px",
              height: "20px",
              fontSize: "13px",
              marginTop: "19px",
            }}
          >
            {product.description}
          </p>
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
          </div>
          <button
            style={{ marginBottom: "10px", width: "253px", marginLeft: "16px" }}
            onClick={() => {
              deleteWishlist(product);
            }}
          >
            Delete
          </button>
          {/* {console.log(product._id)} */}
        </div>
      </div>
    </>
  );
}
