import Image from "next/image";
import { FC } from "react";


const Banner: FC<{ bgImg?: string }> = ({ bgImg }) => {
    const defaultImg: string = '/images/default-banner.png';

    return (
        <>
            <div 
                className="w-full h-[650px] relative"
                style={{ 
                    minHeight: "600px",
                    maxHeight: "650px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    background: `url(${bgImg || defaultImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* <Image 
                    src={bgImg || defaultImg}
                    alt="banner"
                    fill
                    objectFit={"cover"}
                    objectPosition={"center"}
                /> */}

                <div className="absolute bottom-6 right-5 flex justify-center items-center">
                    <Image 
                        width={50}
                        height={50}
                        src="/images/play_circle.png" 
                        alt="play" 
                    />
                </div>
            </div>
        </>
    )
}

export default Banner;