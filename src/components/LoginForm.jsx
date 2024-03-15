import { Button, Input, Typography, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LoginForm = ({ onChange, onSubmit }) => {
  return (
    <section className=" flex h-screen items-center justify-center bg-customBlue-500 ">
      <article className=" flex h-[25rem] w-[20rem] flex-col items-center rounded-md bg-white pt-2 shadow-md">
        <div className="flex h-[90%] w-60 flex-col items-center justify-evenly">
          <Typography variant="h2" className="font-normal text-customBlue-500">
            Login
          </Typography>
          <Avatar src="src\assets\user-image.png" alt="avatar" size="xl" />
          <form onSubmit={onSubmit} className="space-y-2">
            <Input
              size="md"
              label="E-mail"
              color="orange"
              type="email"
              name="email"
              onChange={onChange}
            />
            <Input
              size="md"
              label="Password"
              color="orange"
              type="password"
              name="password"
              onChange={onChange}
            />
            <Button className=" w-60 bg-customOrange-500">Conectar</Button>
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
    </section>
  );
};

export default LoginForm;
