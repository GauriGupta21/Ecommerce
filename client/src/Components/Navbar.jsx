import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg flex"
        style={{ height: "70px", backgroundColor: "lightgray" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://media.istockphoto.com/id/1125893421/vector/vector-logo-design-template-in-simple-linear-style-home-decor-store.jpg?s=612x612&w=0&k=20&c=-y_cnnmn_3kXCCRha2HJKmaG2qkdciFJV2J2jJnZV0k="
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ listStyle: "none" }}
            >
              <li
                class="nav-item"
                style={{
                  listStyle: "none",
                  border: "2px solid black",
                  width: "60px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item" style={{ listStyle: "none" }}>
                <div class="dropdown" style={{ marginLeft: "10px" }}>
                  <button
                    style={{ backgroundColor: "lightgray" }}
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Price
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Color
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Size
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Type
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form style={{ marginRight: "10px" }} class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <li
              class="nav-item"
              style={{
                listStyle: "none",
                marginRight: "10px",

                border: "2px solid black",
                width: "70px",
                height: "31px",
                display: "flex",
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <Link class="nav-link active" aria-current="page" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li
              class="nav-item dropdown"
              style={{ listStyle: "none", display: "flex", marginTop: "auto" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ display: "flex", marginTop: "auto", gap: "10px" }}
              >
                {localStorage.getItem("username") && (
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-cheerful-african-woman-profile-grey-background_105609-6869.jpg"
                    style={{ height: "40px", width: "40px", gap: "10px" }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    height: "40px",
                    backgroundColor: "lightgray",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  {localStorage.getItem("username")}
                </div>
              </div>
              <Link
                style={{ display: "flex", marginTop: "20px" }}
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></Link>

              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/yourOrder">
                    Your Cart
                  </Link>
                  <Link
                    class="dropdown-item"
                    aria-current="page"
                    to="/cancelOrder"
                  >
                    Cancel Order
                  </Link>
                  <Link
                    class="dropdown-item"
                    aria-current="page"
                    to="/getAllOrder"
                  >
                    View Order
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/account">
                    Your Account
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link
                    class="dropdown-item"
                    to="/logout"
                    onClick={() => {
                      localStorage.clear("username");
                    }}
                  >
                    Logout
                  </Link>
                  <Link class="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link class="dropdown-item" to="/signup">
                    SignUp
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                {localStorage.getItem("role") == "Admin" && (
                  <div>
                    <li>
                      <Link class="dropdown-item" to="/createProduct">
                        Create Product
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/deleteProduct">
                        Delete Product
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/updateProduct">
                        Update Product
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
