"use client"

import { FC, useEffect } from "react";
import Footer from "../app/Footer";
import Navbar from "../app/Navbar";
import SideMenu from "../app/Sidemenu";
import { useStore } from "../../Store";


const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
<<<<<<< HEAD
    const { isSideMenuOpen } = useStore();
=======
    const { isSideMenuOpen, toggleSideMenu } = useStore();

    useEffect(() => {
        console.log('isSideMenuOpen =>', isSideMenuOpen);
    }, [isSideMenuOpen])
>>>>>>> d029c3b85130620302739db6c9b92195f9c92034
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