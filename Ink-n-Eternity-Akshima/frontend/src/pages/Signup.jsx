import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:8081/api/auth/signup",
      {
        name,
        email,
        password
      }
    );

    alert(res.data.message);
    navigate("/login");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

  }
};
  return (
    <>
    <Header />
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Username"
          required
         onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
           onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
           onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Sign Up
        </button>

        <div className="link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
    </>
  );
}