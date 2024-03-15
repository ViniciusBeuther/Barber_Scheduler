import { useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (ev) => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };
  console.log(user);
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginScreen;
