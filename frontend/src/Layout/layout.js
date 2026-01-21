import { Outlet } from "react-router";
import { Menu } from "../Menu/Menu";
import { Footer } from "../Footer/Footer";

function Layout(){
    return(
        <>
            <Menu/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export {Layout}