import { useState } from "react";
import { Button, Input, Typography, Avatar } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../API/CreateCompany";
import ErrorModal from "./ErrorModal";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (ev) => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let { data, error } = await supabase.from("Company").select("*").eq("email", user.email).eq("password", user.password);

    if (data == '' || error) {
      setIsModalOpen(true);
      return;
    }

    localStorage.setItem("company", JSON.stringify(data[0].id));

    navigate("/homeScreen");
  };
  return (
    <section className=" flex h-screen items-center justify-center bg-customBlue-500 ">
      <article className=" flex h-[25rem] w-[20rem] flex-col items-center rounded-md bg-white pt-2 shadow-md">
        <div className="flex h-[90%] w-60 flex-col items-center justify-evenly">
          <Typography variant="h2" className="font-normal text-customBlue-500">
            Login
          </Typography>
          <Avatar src="src\assets\user-image.png" alt="avatar" size="xl" />
          <form onSubmit={handleSubmit} className="space-y-2">
            <Input
              size="md"
              label="E-mail"
              color="orange"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              size="md"
              label="Password"
              color="orange"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <Button type="submit" className=" w-60 bg-customOrange-500">
              Conectar
            </Button>
          </form>
          <Link to={"/register"}>
            <Typography
              variant="small"
              className="font-normal text-customBlue-500"
            >
              Registre-se
            </Typography>
          </Link>
        </div>
      </article>
      <ErrorModal isModalOpen={isModalOpen} closeModal={closeModal} message={"Credenciais inválidas!"} />
    </section>
  );
};

export default LoginForm;
