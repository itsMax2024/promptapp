import { useState } from "react";
import { login } from "../api/login";
import "../../../styles/login.css";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const { error } = await login(email, password);
    navigate("/profile");

    if (error) {
      alert(error.message);
    }
  }

  return (
    <div className="login-section">
      <button onClick={() => navigate(-1)} className="login-page-back-btn">
        <ArrowLeft />
      </button>
      <h1>Login</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
      />

      <input
        className=""
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
      <div className="login-links">
        <p>Don't have an account?</p>
        <a href="/signup">Signup!</a>
      </div>
    </div>
  );
}
