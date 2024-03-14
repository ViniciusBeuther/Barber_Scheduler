import { Button, Typography } from "@material-tailwind/react"
import RegisterForm from "../components/RegisterForm"
import registerIcon from "../../public/Icons/register_icon.png"
import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterScreen = () => {
    return(
        <article className="flex justify-center items-center pt-5 bg-customBlue-500 h-[100vh]">
            <section className="w-full flex items-center justify-center bg-customBlue-500">
                <span className="w-[50%]">
                    <Link to={'/'}>
                        <Button className="bg-customOrange-500 hover:bg-orange-700">
                            <IoArrowBackOutline />
                        </Button>
                    </Link>
                    <Typography variant="h3" color="white" className="mb-3 text-center">
                        Registre-se abaixo
                    </Typography>
                    <RegisterForm />
                </span>
                <span className="flex items-center justify-center h-full ">
                        <img src={registerIcon} width={360} height={360} alt="IconForRegisterPage" />
                </span>
            </section>
        </article>
    )
}

export default RegisterScreen