"use client";

import { FC } from 'react';
import SidebarItem, { ISidebarItem } from './Sidebaritem';


type Props = {
    isOpen: boolean;
    toggleSideMenu: () => void;
}

const SideMenu: FC<Props> = ({ isOpen, toggleSideMenu }) => {
    const sidebarItems: ISidebarItem[] = [
        {
            title: 'Residential',
            link: '/residential',
            hasSubItems: true,
            isCollapsed: false,
            subItems: [
                {
                    title: 'Premium Entertainment',
                    link: '/residential/premium-entertainment',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Comfort & Convenience',
                    link: '/residential/comfort-convenience',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Safety & Security',
                    link: '/residential/safety-security',
                    hasSubItems: false,
                    isCollapsed: false,
                },
            ]
        },
        {
            title: 'Commercial',
            link: '/commercial',
            hasSubItems: true,
            isCollapsed: false,
            subItems: [
                {
                    title: 'Huddle & Meeting Rooms',
                    link: '/commercial/huddle-meeting-room',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Board Rooms & Training Rooms',
                    link: '/commercial/board-room',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Auditorium',
                    link: '/commercial/auditorium',
                    hasSubItems: false,
                    isCollapsed: false,
                },
            ]
        },
        {
            title: 'Hospitality',
            link: '/hospitality',
            isCollapsed: false,
            hasSubItems: true,
            subItems: [
                {
                    title: 'Guest Room Management System',
                    link: '/hospitality/guest-room-mgt',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Hotel Management System',
                    link: '/hospitality/hotel-mgt-system',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Spaces & Applications',
                    link: '/hospitality/spaces-application',
                    hasSubItems: false,
                    isCollapsed: false,
                },
            ]
        },
        {
            title: 'About Us',
            link: '/about-us',
            isCollapsed: false,
            hasSubItems: false,
        },
        {
            title: 'Projects',
            link: '/portfolio',
            isCollapsed: false,
            hasSubItems: false,
        }
    ]
    return (
        <div 
            className={`w-full h-[100vh] fixed top-0 right-0 z-[100] bg-[#e3e3e330] cursor-pointer ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={toggleSideMenu}
        >
            <div className={`w-64 h-[100vh] bg-white shadow-md z-[100] absolute right-0 p-4 top-0 transition-transform duration-300 ease-in-out flex flex-col`}>
                <div className="flex justify-end p-4 mb-4">
                    <button onClick={toggleSideMenu} className="text-2xl text-black">
                        &times;
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto">
                    {
                        sidebarItems.map((item: ISidebarItem) => (
                            <SidebarItem
                                key={item.title} 
                                item={item}
                                toggleSideMenu={toggleSideMenu} 
                            />
                        ))
                    }
                </div>
                
                <div className="mt-auto pt-4 border-t border-[#C0C0C0]">
                    <div className="py-3">
                        <SidebarItem 
                            item={
                                {
                                    title: 'Contact Hausba',
                                    link: '/contact-us',
                                    hasSubItems: false,
                                    isCollapsed: false,
                                }
                            }
                            toggleSideMenu={toggleSideMenu}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;