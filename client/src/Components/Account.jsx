import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div>
      {localStorage.getItem("username")}
      {
        <img
          src="https://img.freepik.com/premium-photo/portrait-cheerful-african-woman-profile-grey-background_105609-6869.jpg"
          style={{ height: "40px", width: "40px", gap: "10px" }}
        />
      }
      <Link class="nav-link active" aria-current="page" to="/wishlist">
        Wishlist
      </Link>
    </div>
  );
}
