import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import AdminBoard from "./pages/AdminBoard";
import ScheduleScreen from "./pages/ScheduleScreen";

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
    },
    {
        path: "/admin/:companyID",
        element: <AdminBoard />
    },
    {
        path: "/:companyID/schedule",
        element: <ScheduleScreen />
    }
])

export default router