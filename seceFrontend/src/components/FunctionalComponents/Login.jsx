import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./ContextComponents/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("https://sece2025mern-ztby.onrender.com/login", {
      email,
      password,
    });
    dispatch({
      type: "LOGIN",
      payload: req.data.token,
    });
    localStorage.setItem("token", req.data.token);
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/");
    } else {
      alert(req.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        Password:{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Create an account??<a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
