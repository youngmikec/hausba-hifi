import Link from "next/link";
import { FC, useState } from "react";
import { FaChevronDown } from "react-icons/fa";


type Props = {
    isOpen: boolean;
    toggleSideMenu: () => void;
}

type SidebarItem = {
    title: string;
    link: string;
    hasSubItems: boolean;
    isCollapsed: boolean;
    subItems?: SidebarItem[];
}

const SidebarItem = ({ item, toggleSideMenu }: { item: SidebarItem; toggleSideMenu: () => void }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    return (
        <div key={item.title} className="my-2">
            <div
                className="px-4 py-2 text-sm text-gray rounded-md hover:bg-primary hover:text-white flex justify-between"
            >
                <p>{item.title}</p>
                {
                    item.hasSubItems && (
                        <span 
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className={`${isCollapsed ? 'rotate-180 transition-all' : ''} cursor-pointer`}
                        >
                            <FaChevronDown size={15} />
                        </span>
                    )
                }
            </div>
            {
                item.hasSubItems && isCollapsed && (
                    <div>
                        {
                            item?.subItems?.map((subItem) => (
                                <Link 
                                    onClick={() => {
                                        setIsCollapsed(!isCollapsed);
                                        toggleSideMenu();
                                    }}
                                    key={subItem.title} 
                                    href={subItem.link} 
                                    className="block px-4 py-2 text-xs text-gray-light hover:bg-gray-100"
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

const SideMenu: FC<Props> = ({ isOpen, toggleSideMenu }) => {
    const sidebarItems: SidebarItem[] = [
        {
            title: 'Residential',
            link: '/residential',
            hasSubItems: true,
            isCollapsed: false,
            subItems: [
                {
                    title: 'Residential 1',
                    link: '/residential/1',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Residential 2',
                    link: '/residential/2',
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
                    title: 'Commercial 1',
                    link: '/commercial/1',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Commercial 2',
                    link: '/commercial/2',
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
                    title: 'Hospitality 1',
                    link: '/hospitality/1',
                    hasSubItems: false,
                    isCollapsed: false,
                },
                {
                    title: 'Hospitality 2',
                    link: '/hospitality/2',
                    hasSubItems: false,
                    isCollapsed: false,
                },
            ]
        }
    ]
    return (
        <div 
            className={`w-full h-[100vh] absolute top-0 right-0 z-20 bg-transparent cursor-pointer ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className={`w-64 h-[100vh] bg-white z-20 -right-60 p-4 top-0 mr-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-end p-4 mb-4">
                    <button onClick={() => toggleSideMenu()} className="text-2xl text-black">
                        &times;
                    </button>
                </div>

                <div>
                    {
                        sidebarItems.map((item: SidebarItem) => (
                            <SidebarItem 
                                key={item.title} 
                                item={item}
                                toggleSideMenu={toggleSideMenu} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideMenu;