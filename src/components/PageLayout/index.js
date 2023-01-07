import Header from "../Header";
import {Outlet} from "react-router";
import Footer from "../Footer";

function PageLayout() {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
export default PageLayout;