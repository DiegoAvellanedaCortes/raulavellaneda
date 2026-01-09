import { Outlet } from "react-router";
import { Menu } from "../Menu/Menu";

function Layout(){
    return(
        <>
            <Menu/>
            <Outlet/>
        </>
    );
}

export {Layout}