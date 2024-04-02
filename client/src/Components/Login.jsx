import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {
    const userContext=useContext(UserContext)
    const {login}=userContext;
  
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <div className="container my-3">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={details.email}
            onChange={(e) => onchange(e)}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={details.password}
            onChange={(e) => onchange(e)}
            type="password"
            className="form-control"
            id="exampleInputPassword2"
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
    </div>
  );
}
