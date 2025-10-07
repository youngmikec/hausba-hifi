import { ISidebarItem } from "../components/app/Sidemenu/Sidebaritem";

export const HeroBackgroundImages: string[] = [
    '/images/Hero-1.png',
    '/images/Hero-2.png',
    '/images/Hero-3.png',
];

export const CompanyLogos: string[] = [
    '/images/company-logos/HH-Logo.png',
    '/images/company-logos/lutron.svg',
    '/images/company-logos/mar-and-mor.png',
    '/images/company-logos/Microsoft-Logo.png',
    '/images/company-logos/mtn-logo.svg',
    '/images/company-logos/Petralon-New-Logo.png',
    '/images/company-logos/Yinka-Folawiyo-Group-Logo-q.png',
];

export interface AppLink {
    path: string;
    title: string;
}

export const FooterLinks: {
    services: AppLink[],
    menu: AppLink[],
    socials: AppLink[],
} = {
    services: [
        { path: "/residential", title: "Residential" },
        { path: "/commercial", title: "Commercial" },
        { path: "/industrial", title: "Industrial" },
    ],
    menu: [
        { path: "/about-us", title: "About Us" },
        { path: "/estimator", title: "Estimator" },
        { path: "/portfolio", title: "Our Portfolio" },
        { path: "/contact-us", title: "Contact Us" },
    ],
    socials: [
        { path: "/instagram", title: "Instagram" },
        { path: "/facebook", title: "Facebook" },
        { path: "/x", title: "X" },
        { path: "/linkedin", title: "Linkedin" },
    ]
}

export type INavLink = {
    name: string;
    href: string;
}

export  const Navigations: INavLink[] = [
    {
        name: "Residential",
        href: "/residential",
    },
    {
        name: "Commercial",
        href: "/commercial",
    },
    // {
    //     name: "Hospitality",
    //     href: "/hospitality",
    // },
];

export const SidebarItems: ISidebarItem[] = [
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
    // {
    //     title: 'Hospitality',
    //     link: '/hospitality',
    //     isCollapsed: false,
    //     hasSubItems: true,
    //     subItems: [
    //         {
    //             title: 'Guest Room Management System',
    //             link: '/hospitality/guest-room-mgt',
    //             hasSubItems: false,
    //             isCollapsed: false,
    //         },
    //         {
    //             title: 'Hotel Management System',
    //             link: '/hospitality/hotel-mgt-system',
    //             hasSubItems: false,
    //             isCollapsed: false,
    //         },
    //         {
    //             title: 'Spaces & Applications',
    //             link: '/hospitality/spaces-application',
    //             hasSubItems: false,
    //             isCollapsed: false,
    //         },
    //     ]
    // },
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