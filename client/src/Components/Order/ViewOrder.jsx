import React, { useContext, useEffect } from "react";
import ProductContext from "../../Context/ProductContext";

export default function ViewOrder() {
  const productContext = useContext(ProductContext);
  const { getAllOrder, orderArr } = productContext;
  useEffect(() => {
    getAllOrder();
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
        View Your Order
      </h1>
      {/* {console.log(orderArr)} */}

      {orderArr.map((ele) => {
        return (
          <div
            className="mx-5"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* <h1>{ele._id}</h1> */}
            <h1>
              {ele.orderItem.map((e) => {
                return (
                  <div>
                    <h1>{e.name}</h1>
                    <h4>{e.price}</h4>
                    <h4>{e.totalprice}</h4>
                  </div>
                );
                // {
                //   console.log(e.name);
                // }
              })}
              <div
                style={{
                  width: "100vh",
                  height: "2px",
                  backgroundColor: "blue",
                }}
              ></div>
            </h1>
            {/* {console.log(ele)} */}

            <h1>{ele.orderStatus}</h1>
          </div>
        );
      })}
    </>
  );
}
