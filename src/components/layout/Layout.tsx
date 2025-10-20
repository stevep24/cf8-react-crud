import Header from "./Header.tsx";
import {Outlet} from "react-router";
import  Footer from "./Footer";

const RouterLayout =() => {


    return(
        <>
            <>
                <Header/>
                <div className="container mx-auto pt-24 min-h-[92vh]">
                    <Outlet/>
                </div>
                <Footer/>
            </>
        </>
    )
}
export default RouterLayout;