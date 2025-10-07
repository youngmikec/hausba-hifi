"use client";

import { FC } from 'react';
import { SidebarItems } from '../../../constants';
import SidebarItem, { ISidebarItem } from './Sidebaritem';
import { useStore } from '../../../Store';


type Props = {
    isOpen: boolean;
}

const SideMenu: FC<Props> = ({ isOpen }) => {
    const { toggleSideMenu } = useStore();
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
                        SidebarItems.map((item: ISidebarItem) => (
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