'use client'
import { HeroBackgroundImages } from "@/app/constants";
import { FC, useEffect, useState } from "react";

type Props = {
    header: string;
    description?: string;
    position?: 'center' | 'left' | 'right';
    bgImg: string;
}

const Hero: FC<Props> = ({ header, description, position = 'center', bgImg }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroBackgroundImages.length)
        }, 6000) // 6 seconds

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        // Trigger enter animation on mount
        setIsVisible(true);

        // Cleanup function to handle unmounting
        return () => {
            setIsVisible(false);
        };
    }, []);

    const getPositionClasses = () => {
        switch (position) {
            case 'center':
                return 'items-center justify-center text-center';
            case 'right':
                return 'items-center justify-end text-left pr-10';
            case 'left':
            default:
                return 'items-center justify-start text-left pl-10';
        }
    };

    return (
        <div
            className="h-[80vh] w-full bg-center bg-cover transition-all ease-linear duration-3000 relative overflow-hidden"
            style={{ 
                backgroundImage: `url(${bgImg})`, 
                backgroundBlendMode: "overlay",
                backgroundColor: '#070400bb'
            }}
        >
            
            {/* Content container */}
            <div className={`relative h-full flex ${getPositionClasses()}`}>
                <div className={`w-full md:w-4/12 transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <p className="text-white text-2xl md:text-2xl lg:text-4xl font-semibold font-montserrat mb-4">
                        {header}
                    </p>
                    
                    {description && (
                        <p className={`text-white text-sm font-montserrat my-10 transform transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;