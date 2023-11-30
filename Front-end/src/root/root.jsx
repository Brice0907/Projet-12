import { Outlet } from "react-router-dom";
import Vertical from "../components/vertical/vertical.jsx";
import Header from "../components/header/header.jsx";


export default function Root() {
    return (
        <>
            <Header />
            <main className="main">
                <Vertical />
                <Outlet />
            </main>
        </>
    )
}