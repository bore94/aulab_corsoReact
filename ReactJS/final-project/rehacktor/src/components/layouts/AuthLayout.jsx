import { Outlet } from "react-router";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";

export default function AuthLayout(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
