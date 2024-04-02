import OrderContext from "./OrderContext";
const OrderState = (props) => {
  const createOrder = (product) => {
    let local = "";
    if (localStorage.getItem("orderArr")) {
      local = localStorage.getItem("orderArr").replace("]", "");
      local = local.replace("[", "");
      local += ",";
    }

    localStorage.setItem(
      "orderArr",
      "[" + local + JSON.stringify(product) + "]"
    );
  };
  const addToCart = async (shippingDetails) => {
    console.log(shippingDetails);

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      authToken: localStorage.getItem("authToken"),
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      shippingInfo: {
        address: shippingDetails.address,
        city: shippingDetails.city,
        state: shippingDetails.state,
        country: shippingDetails.country,
        pinCode: shippingDetails.pinCode,
        phoneNo: shippingDetails.phoneNo,
      },
      orderItem: JSON.parse(localStorage.getItem("orderArr")),
      totalPrice: 74.98,
    });

    let response = await fetch("http://localhost:8000/cart/addToCart", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    console.log(data);
  };

  return (
    <OrderContext.Provider value={{ createOrder, addToCart }}>
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderState;
