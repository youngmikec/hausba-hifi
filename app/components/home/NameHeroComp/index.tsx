"use client";

import { FC, useEffect, useState } from "react";

type Props = {
    title: string;
    position?: number;
    onTransitionEnd?: () => void;
}

const NameHeroComp: FC<Props> = ({ title, position = 1, onTransitionEnd }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Trigger slide-in animation after component mounts
        setIsVisible(true);
        
        // Set a timer to call onTransitionEnd after 3 seconds
        const timer = setTimeout(() => {
            if (onTransitionEnd) {
                onTransitionEnd();
            }
        }, 3000);
        
        // Clean up timer on unmount
        return () => clearTimeout(timer);
    }, [onTransitionEnd]);
    
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <p 
                className={`text-4xl font-semibold text-center text-black font-montserrat transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                {title}
            </p>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 right-8 -translate-x-1/2 flex space-x-3">
            {Array(3).fill('_').map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full border-[2px] border-black transition ${(index + 1) === position ? "bg-primary" : "bg-gray-100"}`}
                ></button>
            ))}
            </div>
        </div>
    )
}

export default NameHeroComp;