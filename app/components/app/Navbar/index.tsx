"use client";

import { useStore } from "@/app/Store";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

type INavLink = {
    name: string;
    href: string;
}

const Navbar: FC = () => {
    const { toggleSideMenu } = useStore();
    const pathname = usePathname();
    
    const navigations: INavLink[] = [
        {
            name: "Residential",
            href: "/residential",
        },
        {
            name: "Commercial",
            href: "/commercial",
        },
        {
            name: "Hospitality",
            href: "/hospitality",
        },
    ];
    return (
        <>
            {/* fixed top-0 z-20 */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 px-10  w-full bg-white">
                <div className="flex justify-between items-center gap-4">
                    <div className="hidden sm:block lg:block">
                        <ul className="flex justify-between gap-3">
                            {
                                navigations.map((item) => (
                                    <li key={item.href} className="relative">
                                        {pathname.includes(item.href) && item.href !== "/" && (
                                            <div className="absolute -bottom-2 right-1/2 w-2 h-2 rounded-full bg-primary"></div>
                                        )}
                                        <Link 
                                            className="text-sm font-montserrat text-gray-light active" 
                                            aria-current="page" 
                                            href={item.href}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex justify-start -ml-10 min-w-[4/12]">
                        <Link className="navbar-brand pt-2" href="/">
                            <Image 
                                src={'/images/logo-black.png'}
                                width={100}
                                height={100}
                                alt={'logo'}
                            />
                        </Link>
                    </div>
                    <button 
                        className="navbar-toggler cursor-pointer" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={toggleSideMenu}
                    >
                        <Image 
                            src={'/images/ham-menu.svg'}
                            width={30}
                            height={30}
                            alt={'menu'}
                        />
                    </button>
                    
                </div>
            </nav>
        </>
    )
};

export default Navbar;