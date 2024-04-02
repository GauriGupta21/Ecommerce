import { useNavigate } from "react-router-dom";
import ProductContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
  const navigate = useNavigate();
  const createProduct = async (product) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: product.name,
      image: product.image,
      description: product.description,
      stock: product.stock,
      price: product.price,
    });

    let response = await fetch("http://localhost:8000/product/CreateProduct", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    alert("Succesfully added the product");
    // console.log(data);
  };
  const deleteProduct = async (product) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      id: product.id,
    });

    let response = await fetch("http://localhost:8000/product/DeleteProduct", {
      method: "DELETE",
      body: bodyContent,
      headers: headersList,
    });
    alert("Item deleted");

    let data = await response.text();
  };
  const getAllProduct = async (setArr) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch("http://localhost:8000/product/getAllProduct", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    setArr((arr) => arr.concat(data));
    // console.log(data);
  };
  const updateProduct = async (product) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      stock: product.stock,
      price: product.price,
    });

    let response = await fetch("http://localhost:8000/product/updateProduct", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    if (data.success) {
      alert("Successfully updated");
    } else {
      alert(data.error);
    }
  };

  const wishlist = async (product) => {
    let local = "";
    if (
      localStorage.getItem("wishlist") &&
      JSON.parse(localStorage.getItem("wishlist")).length != 0
    ) {
      local = localStorage.getItem("wishlist").replace("]", "");
      local = local.replace("[", "");
      local += ",";
    }
    localStorage.setItem(
      "wishlist",
      "[" + local + JSON.stringify(product) + "]"
    );

    alert("Added to Your Wishlist");
  };

  const deleteWishlist = async (product) => {
    let local = JSON.parse(localStorage.getItem("wishlist"));
    if (local) {
      console.log(local);
      local = local.filter((ele) => {
        return ele._id != product._id;
      });
      local = JSON.stringify(local);
    }
    localStorage.setItem("wishlist", local);
    // navigate("/wishlist");
  };
  const cancelProduct = async (product) => {
    console.log(product);
    const res = await fetch("http://localhost:8000/cart/cancelOrder", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ id: product.id }),
    });
    const data = await res.json();
    console.log(data);
  };
  const [orderArr, setOrderArr] = useState([]);
  const getAllOrder = async () => {
    // console.log(product);
    const res = await fetch("http://localhost:8000/cart/getAllOrder", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
    setOrderArr(data.order);
  };
  return (
    <ProductContext.Provider
      value={{
        createProduct,
        deleteProduct,
        getAllProduct,
        updateProduct,
        wishlist,
        deleteWishlist,
        cancelProduct,
        getAllOrder,
        orderArr,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
