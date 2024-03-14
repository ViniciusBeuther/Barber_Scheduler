import { Button, Input, Typography, Avatar } from "@material-tailwind/react";
const LoginForm = () => {
  return (
    <section className=" flex h-screen items-center justify-center bg-blue-gray-50 ">
      <article className=" h-[25rem] w-[20rem] rounded-md shadow-md flex flex-col items-center bg-white">
        <div className="w-60 flex flex-col items-center h-[90%] justify-evenly">
          <Typography variant="h2" color="orange" className="font-normal">
            Login
          </Typography>
          <Avatar src="src\assets\user-image.png" alt="avatar" size="xl" />
          <Input size="md" label="E-mail" color="orange" type="email" />
          <Input size="md" label="Password" color="orange" type="password" />
          <Button color="orange" className="w-60">
            Conectar
          </Button>
        </div>
      </article>
    </section>
  );
};

export default LoginForm;
