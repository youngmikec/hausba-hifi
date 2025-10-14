"use client";
import Image from 'next/image';
import { FC } from 'react';

type Props = {
    project: any;
}

const ProjectDetail: FC<Props> = ({ project }) => {

    return (
        <div className="relative w-full sm:w-10/12 md:w-9/12 mx-auto min-h-[500px] py-20 px-6 flex flex-col justify-center animate-fade-in">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center transform transition-all duration-1000 ease-in-out translate-y-0 opacity-100">
                    <p className="text-4xl md:text-5xl font-semibold text-black-gray font-montserrat mb-6">{project.header}</p>
                    <p className="text-xs md:text-sm text-black font-montserrat my-4">{project.description}</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-[70%] h-[500px] transform transition-all duration-1000 ease-in-out translate-y-0 opacity-100">
                        <Image
                            src={project.img} 
                            alt={project.header} 
                            fill
                            objectFit='cover'
                            className="w-full h-full object-cover rounded-md" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;