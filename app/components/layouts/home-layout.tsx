"use client"

import { FC, useEffect } from "react";
import Footer from "../app/Footer";
import Navbar from "../app/Navbar";
import SideMenu from "../app/Sidemenu";
import { useStore } from "../../Store";


const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isSideMenuOpen, toggleSideMenu } = useStore();

    useEffect(() => {
        console.log('isSideMenuOpen =>', isSideMenuOpen);
    }, [isSideMenuOpen])
    return (
        <div className="relative w-full overflow-hidden">
            <Navbar />
            {
                isSideMenuOpen && (
                    <SideMenu isOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
                )
            }
            <div>
                { children }
            </div>
            <Footer />
        </div>
    )
}
export default HomeLayout;