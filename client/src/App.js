import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import UserState from "./Context/UserState";
import CreateProduct from "./Components/Product/CreateProduct";
import ProductState from "./Context/ProductState";
import DeleteProduct from "./Components/Product/DeleteProduct";
import UpdateProduct from "./Components/Product/UpdateProduct";
import OrderState from "./Context/OrderState";
import ListItems from "./Components/Order/ListItems";
import PlaceOrder from "./Components/Order/PlaceOrder";
import Wishlist from "./Components/Order/Wishlist";
import CancelOrder from "./Components/Order/CancelOrder";
import ViewOrder from "./Components/Order/ViewOrder";
import Account from "./Components/Account";

function App() {
  return (
    <UserState>
      <OrderState>
        <ProductState>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/createProduct" element={<CreateProduct />} />
            <Route exact path="/deleteProduct" element={<DeleteProduct />} />
            <Route exact path="/updateProduct" element={<UpdateProduct />} />
            <Route exact path="/yourOrder" element={<ListItems />} />
            <Route exact path="/placeOrder" element={<PlaceOrder />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/cancelOrder" element={<CancelOrder />} />
            <Route exact path="/getAllOrder" element={<ViewOrder />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </ProductState>
      </OrderState>
    </UserState>
  );
}

export default App;
