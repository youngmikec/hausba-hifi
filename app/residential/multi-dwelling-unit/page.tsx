"use client";

import { FC, useState } from "react";
import HomeLayout from "@/app/components/layouts/home-layout";
import NameHeroComp from "@/app/components/home/NameHeroComp";
import Hero from "@/app/components/home/Hero";
import ProjectDetail from "@/app/components/app/ProjectDetail";
import { ProjectDetails } from "@/app/constants";
import Image from "next/image";

const MultiDwellingUnit: FC = () => {
    const [showHero, setShowHero] = useState(true);
    return (
        showHero ? 
            <NameHeroComp 
                title="Multi-Dwelling Unit" 
                position={1}
                onTransitionEnd={() => setShowHero(false)}
            /> : 
            (
                <HomeLayout>
                    <Hero 
                        header={`Turn Your Development Into a Landmark of Smart Luxury Living`}
                        bgImg="/images/new-imgs/detached-apartments.png"
                    />
                    <ProjectDetail project={ProjectDetails.multiDwelling} />
                    <div className="w-full">
                        <Image
                            src="/images/new-imgs/central-business-access.png"
                            alt="central-business-access"
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

export default MultiDwellingUnit;