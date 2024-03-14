import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen />
    },
    {
        path: "/register",
        element: <RegisterScreen />
    },
    {
        path: "/homeScreen",
        element: <HomeScreen />
    }
])

export default router