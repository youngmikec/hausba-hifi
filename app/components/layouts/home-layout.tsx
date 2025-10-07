"use client"

import { FC, useEffect } from "react";
import Footer from "../app/Footer";
import Navbar from "../app/Navbar";
import SideMenu from "../app/Sidemenu";
import { useStore } from "../../Store";


const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isSideMenuOpen } = useStore();
    return (
        <div className="relative w-full overflow-hidden">
            <Navbar />
            {
                isSideMenuOpen && (
                    <SideMenu 
                        isOpen={isSideMenuOpen} 
                    />
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