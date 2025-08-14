"use client"

import Link from "next/link";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

export type ISidebarItem = {
    title: string;
    link: string;
    hasSubItems: boolean;
    isCollapsed: boolean;
    subItems?: ISidebarItem[];
}


const SidebarItem: FC<{ item: ISidebarItem; toggleSideMenu: () => void }> = ({ item, toggleSideMenu }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleSideNav = (item: ISidebarItem) => {
        if (toggleSideMenu) {
            toggleSideMenu();
        }
        item.hasSubItems ? setIsCollapsed(!isCollapsed) : router.push(item.link)
    }

    return (
        <div key={item.title} className="my-2">
            <div
                onClick={() => toggleSideNav(item)}
                className={`
                    px-4 py-2 text-sm font-[500] font-montserrat flex justify-between items-center rounded-md
                    ${pathname.includes(item.link) ? 'bg-primary text-white hover:bg-primary hover:text-white' : "text-black hover:bg-[#FFF2E6]"}
                `}
            >
                <p>{ item.title }</p>
                {
                    item.hasSubItems && (
                        <span 
                            className={`${isCollapsed ? 'rotate-180 transition-all' : ''} cursor-pointer`}
                        >
                            <FaChevronDown size={10} />
                        </span>
                    )
                }
            </div>
            {
                item.hasSubItems && isCollapsed && (
                    <div className="my-2">
                        {
                            item?.subItems?.map((subItem) => (
                                <Link 
                                    onClick={() => {
                                        setIsCollapsed(!isCollapsed);
                                        toggleSideMenu();
                                    }}
                                    key={subItem.title} 
                                    href={subItem.link} 
                                    className={`
                                        block px-4 py-2 my-1 text-xs text-gray-lightest font-montserrat font-[500] hover:bg-[#FFF2E6]
                                        ${pathname.includes(subItem.link) ? 'bg-[#FFF2E6]' : ''}
                                    `}
                                >
                                    {subItem.title}
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SidebarItem;