import { Button, Input, Typography, Avatar } from "@material-tailwind/react";
const LoginForm = () => {
  return (
    <section className=" flex h-screen items-center justify-center bg-customBlue-500 ">
      <article className=" flex h-[25rem] w-[20rem] flex-col items-center rounded-md bg-white shadow-md">
        <div className="flex h-[90%] w-60 flex-col items-center justify-evenly">
          <Typography variant="h2" color="orange" className="font-normal">
            Login
          </Typography>
          <Avatar src="src\assets\user-image.png" alt="avatar" size="xl" />
          <Input size="md" label="E-mail" color="orange" type="email" />
          <Input size="md" label="Password" color="orange" type="password" />
          <Button className=" w-60 bg-customOrange-500">Conectar</Button>
        </div>
      </article>
    </section>
  );
};

export default LoginForm;
