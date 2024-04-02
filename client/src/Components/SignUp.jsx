import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

export default function SignUp() {
  const userContext = useContext(UserContext);
  const { signup } = userContext;

  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(details);
  };

  return (
    <div className="container my-3">
      <h1>SignUp</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            name="username"
            value={details.username}
            onChange={(e) => onchange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          />
        </div>
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
            id="exampleInputPassword4"
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
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Role
          </label>
          <input
            name="role"
            value={details.role}
            onChange={(e) => onchange(e)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
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
