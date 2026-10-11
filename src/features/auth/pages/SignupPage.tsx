import { useState } from "react";
import { signUp } from "../api/signUp";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { error } = await signUp(email, password);

    if (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>Signup</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}
