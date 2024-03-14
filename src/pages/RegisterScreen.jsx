import { Button, Typography } from "@material-tailwind/react";
import RegisterForm from "../components/RegisterForm";
import registerIcon from "../../src/assets/Icons/register_icon.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterScreen = () => {
  return (
    <article className="flex h-[100vh] items-center justify-center bg-customBlue-500 pt-5">
      <section className="flex w-full items-center justify-center bg-customBlue-500">
        <span className="w-[50%]">
          <Link to={"/"}>
            <Button className="bg-customOrange-500 hover:bg-orange-700">
              <IoArrowBackOutline />
            </Button>
          </Link>
          <Typography variant="h3" color="white" className="mb-3 text-center">
            Registre-se abaixo
          </Typography>
          <RegisterForm />
        </span>
        <span className="flex h-full items-center justify-center ">
          <img
            src={registerIcon}
            width={360}
            height={360}
            alt="IconForRegisterPage"
          />
        </span>
      </section>
    </article>
  );
};

export default RegisterScreen;
