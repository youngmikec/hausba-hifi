"use client";
import { FC } from 'react';

type Props =  { 
    images: string[], 
    current: number, 
    setCurrent: (index: number) => void 
};

const DotsIndicator: FC<Props> = ({ images, current, setCurrent }: Props) => {
    return (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full border-[2px] border-black transition ${
                        index === current ? "bg-primary" : "bg-gray-100"
                    }`}
                ></button>
            ))}
        </div>
    )
}

export default DotsIndicator;