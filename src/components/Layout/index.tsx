import { Outlet } from "react-router";
import { Header } from "../Header";

export const Layout = () => (
    <>
        <Header />
        <main>
            <Outlet/>
        </main>
    </>
)