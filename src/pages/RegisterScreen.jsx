import { Button, Typography } from "@material-tailwind/react";
import RegisterForm from "../components/RegisterForm";
import registerIcon from "../../src/assets/Icons/register_icon.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterScreen = () => {
  return (
    <article className="flex h-[100vh] items-center justify-center bg-customBlue-500 pt-5">
      <section className="flex items-center bg-white rounded-md p-10 justify-center">
        <span className="">
          <section className="flex">
            <Link to={"/"}>
              <Button className="bg-customOrange-500 hover:bg-orange-700">
                <IoArrowBackOutline />
              </Button>
            </Link>
            <Typography variant="h3" className="mb-3 text-left ml-5 text-customBlue-500 w-full">
              Registre-se abaixo
            </Typography>
          </section>
          <RegisterForm />
        </span>
        
      </section>
    </article>
  );
};

export default RegisterScreen;
