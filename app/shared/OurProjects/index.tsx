"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const tabs = [
    {
        title: 'Luxury MDUs',
        numOfProject: 5,
        projects: [
            {
                title: 'XAMIRA HEIGHTS',
                img: '/images/new-imgs/stylish-highrise.png'
            },
            {
                title: 'ALTO PENTHOUSE ACCRA',
                img: '/images/new-imgs/luxury-apartment.png'
            },
            {
                title: 'BOURDILON 4',
                img: '/images/new-imgs/highrise-building.png'
            },
        ]
    },
    {
        title: 'Large Villas',
        numOfProject: 45,
        projects: [
            {
                title: 'CONFIDENCE CARGO',
                img: '/images/new-imgs/luxury-apartment.png'
            },
            {
                title: 'DLM',
                img: '/images/new-imgs/dlm.png'
            },
            {
                title: 'SS MAITAMA',
                img: '/images/new-imgs/ss-miatama.png'
            },
        ]
    },
    {
        title: 'Reference Cinemas',
        numOfProject: 27,
        projects: [
            {
                title: 'LEKKI CINEMA',
                img: '/images/red-seat-cinema.png'
            },
            {
                title: 'BUA CINEMA',
                img: '/images/black-seat-cinema.png'
            },
            {
                title: 'ALEXENCE VILLA CINEMA',
                img: '/images/new-imgs/alex-villa-cinema.png'
            },
        ]
    }
]

const OurProjectSection: FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-white w-full mt-12">
            <div className="my-4">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center mb-4">Our Projects</p>
            </div>

            <div className="flex justify-center items-center gap-4 md:gap-6">
                {
                    tabs.map((tab, index) => (
                        <div key={index}>
                            <p 
                                onClick={() => setActiveTab(index)}
                                className="text-primary text-sm cursor-pointer"
                            >{tab.title}</p>
                            <div className="w-full mt-2 flex justify-center items-center">
                                <p 
                                    className={`rounded-full border-[1px] border-gray h-6 w-6 flex justify-center items-center text-xs ${activeTab === index ? 'bg-primary border-none' : ''}`}
                                >{tab.numOfProject}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 mx-auto w-11/12 sm:w-10/12 md:w-8/12">
                {
                    tabs[activeTab].projects.map((project, index) => (
                        <div key={index}>
                            <div className="relative h-[300px] w-full overflow-hidden">
                                <Image 
                                    src={project.img} 
                                    alt={project.title} 
                                    fill
                                    className="object-cover rounded-2xl" 
                                    priority
                                />
                            </div>

                            <p className=" w-full text-center text-black text-xs font-montserrat mt-2">
                                {project.title}
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center items-center mb-12">
                <Link href="/portfolio" className="px-6 py-3 text-primary hover:scale-105 text-sm transition">
                    View Full Portfolio
                </Link>
            </div>
        </div>
    )
}

export default OurProjectSection;