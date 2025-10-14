"use client";

import { FC, useState } from "react";
import HomeLayout from "@/app/components/layouts/home-layout";
import NameHeroComp from "@/app/components/home/NameHeroComp";
import Hero from "@/app/components/home/Hero";
import ProjectDetail from "@/app/components/app/ProjectDetail";
import { ProjectDetails } from "@/app/constants";
import Image from "next/image";

const ReferenceCinemas: FC = () => {
    const [showHero, setShowHero] = useState(true);
    return (
        showHero ? 
            <NameHeroComp 
                title="Reference Cinemas" 
                position={3}
                onTransitionEnd={() => setShowHero(false)}
            /> : 
            (
                <HomeLayout>
                    <Hero 
                        position="right"
                        header={`Smart Lighting, Energy, and AV in Individual Apartments`}
                        description={`Give residents total control of their homes. From mood lighting to energy management and immersive entertainment, we deliver future-ready apartments that command higher demand and premium pricing.`}
                        bgImg="/images/new-imgs/de-altona.png"
                    />
                    <ProjectDetail project={ProjectDetails.largeVilla} />
                    <div className="w-full">
                        <Image
                            src="/images/new-imgs/remote-support.png"
                            alt="remote-support"
                            width={1920}
                            height={1080}
                            className="w-full h-full"
                            objectFit="contain"
                        />
                    </div>
                </HomeLayout>
            )
    );
}

export default ReferenceCinemas;
