import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";


export default function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:8081/api/auth/login",
      {
        name,
        password
      }
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert(res.data.message);

    navigate("/");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};
  return (
    <>
    <Header />
    <div className="login-container">
      <form onSubmit={handleSubmit}>
       <h2>Login</h2>

        <input type="text" name="name" placeholder="Username" required
        onChange={(e) => setName(e.target.value)} />

        <input  type="password" name="password" placeholder="Password" required
         onChange={(e) => setPassword(e.target.value)} />

        <button type="submit"> Login </button>

        <div className="link">
          Don't have an account?
          <Link to="/signup"> Create Account</Link>
        </div>
      </form>
    </div>
    </>
  );
}