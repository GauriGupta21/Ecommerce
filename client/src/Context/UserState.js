import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const UserState = (props) => {
  const navigate = useNavigate();

  const signup = async (details) => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: details.username,
      email: details.email,
      password: details.password,
      role: details.role,
    });

    let response = await fetch("http://localhost:8000/user/createuser", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    // console.log(data);
    if (data.success) {
      alert(data.message);
      let user = data.user;
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("role", user.role);
      localStorage.setItem("orderArr", "");

      navigate("/");
    } else {
      alert(data.error);
    }
  };
  const login = async (details) => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: details.email,
      password: details.password,
    });

    let response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    // console.log(data);
    if (data.success) {
      alert(data.message);
      let user = data.user;
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("role", user.role);
      localStorage.setItem("orderArr", "");

      navigate("/");
    } else {
      alert(data.error);
    }
  };
  return (
    <UserContext.Provider value={{ signup, login }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
