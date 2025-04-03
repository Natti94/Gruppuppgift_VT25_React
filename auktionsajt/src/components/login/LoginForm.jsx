import { useState, useContext } from "react";
import { login } from "../services/api";
import { AppContext } from "../context/AppContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useContext(AppContext);

  const handleLogin = async () => {
    const data = await login({ email, password });
    if (data.token) {
      setToken(data.token);
      setUser(data.user);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Lösenord" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Logga in</button>
    </div>
  );
}
