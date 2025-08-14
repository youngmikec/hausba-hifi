"use client"

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppButton from "@/app/shared/app-button";


const ExperienceComp: FC = () => {
    const router = useRouter();
    const goToExperiencePage = () => router.push("/experience-center");
    
    return (
        <div className="px-10 py-6 w-full min-h-[200px] my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-center text-[12px] md:text-[14px] text-black font-montserrat my-2">UP CLOSE AND PERSONAL</p>
                        <p className="text-center text-[24px] md:text-[30px] text-black font-montserrat font-semibold my-2">Experience Hausba</p>
                        <p className="text-center text-[13px] md:text-[16px] text-black font-montserrat my-2">Come by one of our experience centres to see, hear & feel Hausba yourself.</p>
                        <div className="flex justify-center items center my-2">
                            <AppButton
                                fill={"fill"}
                                bgColor={"primary"}
                                width={"max"}
                                btnText={"Visit Hausba"}
                                onClick={goToExperiencePage}
                            />
                        </div>
                    </div>
                </div>
                <div className="relative" style={{ 
                    minHeight: "500px",
                    maxHeight: "500px"
                }}>
                    <Image
                        src={"/images/home-qr-code.png"}
                        alt="qr-code"
                        fill
                        className="w-full h-full"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    )
};

export default ExperienceComp;