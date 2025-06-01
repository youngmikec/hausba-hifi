'use client'
import { FC } from 'react';
import Image from 'next/image';
import { CompanyLogos } from "@/app/constants";




const LogoCarousel: FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white py-4 w-full">
      <div className="animate-scroll flex w-max">
        {[...CompanyLogos, ...CompanyLogos].map((logo, index) => (
          <div key={index} className="mx-12 flex justify-start items-center">
            <Image 
                src={logo} 
                alt={`logo-${index}`} 
                width={100} 
                height={30} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel;
