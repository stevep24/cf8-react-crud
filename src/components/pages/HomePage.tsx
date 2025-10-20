import {Link, } from "react-router";
import {useEffect} from "react";


const HomePage=  () =>{

    const links = [
        {path: "/", label: "Home Page"},
        {path: "/products", label: "Products"},
        {path: "/products/12", label: "Product (ID:12)"},


    ]

    useEffect(()=>{
        document.title = "CF8 Home Page";
    },[])

    return(
        <>
            <h1 className={'text-center text-2xl my-12'}>Home Page</h1>
            <div className="flex flex-col items-start max-w-sm mx-auto gap-4">

                {links.map((link) =>(
                    <Link key={link.path}
                          to={link.path}
                          className={'bg-gray-200 w-full px-4 py-2 rounded'}

                    >
                        {link.label}
                    </Link>
                ))}


                {/*<Link className={'bg-gray-200 w-full px-4 py-2 rounded'}*/}
                {/*  to="/examples/name-changer" >*/}
                {/*Name Changer*/}
                {/*</Link>*/}
                {/*<NavLink className={'bg-gray-200 w-full px-4 py-2 rounded'}*/}
                {/*      to="/timer" >*/}
                {/*    Timer*/}
                {/*</NavLink>*/}


            </div>
        </>
    )
}
export default HomePage;