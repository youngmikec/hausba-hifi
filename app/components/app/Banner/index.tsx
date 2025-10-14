import Image from "next/image";
import { FC } from "react";


const Banner: FC<{ bgImg?: string }> = ({ bgImg }) => {
    const defaultImg: string = '/images/default-banner.png';

    return (
        <>
            <div 
                className="w-full relative"
                style={{ 
                    minHeight: "600px",
                    maxHeight: "1000px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    background: `url(${bgImg || defaultImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
        </>
    )
}

export default Banner;