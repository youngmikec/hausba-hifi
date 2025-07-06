"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const SafetySecurity: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/woman-with-tablet.png"} />
        {/* smart survellance */}
        <div className='w-11/12 mx-auto md:w-9/12 my-32'>
          <div className="px-10 py-6 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">smart surveillance</p>
                        <p className="text-left text-[20px] md:text-[27px] text-primary font-montserrat font-semibold my-2">secure. aware. in control.</p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          A glance at your phone, and you see it all—inside, outside, every angle covered. 
                          Hausba’s smart surveillance solutions blend seamlessly into your home, 
                          offering discreet protection and complete peace of mind. 
                        </p>
                    </div>
                </div>
                <div 
                  className="relative" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px"
                  }}
                >
                  <Image
                    src={"/images/wall-intercom.png"}
                    alt="qr-code"
                    fill
                    className="w-full h-full"
                    objectFit="contain"
                  />
                </div>
            </div>
          </div>
        </div>
        {/* smart survellance */}


        <div className="my-32 w-full min-h-[200px] relative" style={
          { 
            background: "url(/images/caution.png)", 
            backgroundSize: "cover",
            height: '300px',
            backgroundPosition: 'center'
          }
        }>
        </div>


        {/* smart security system */}
        <div className='w-11/12 mx-auto md:w-9/12 my-32'>
          <div className="px-10 py-6 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">smart security system</p>
                        <p className="text-left text-[20px] md:text-[27px] text-primary font-montserrat font-semibold my-2">always aware. always protected.</p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          Be the first to know—no matter where you are. In the event of an emergency or unexpected activity, 
                          Hausba’s smart security system keeps you instantly informed. 
                          From real-time alerts to remote access and control, your home stays secure, and your peace of mind stays intact.
                        </p>
                    </div>
                </div>
                <div 
                  className="relative" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px"
                  }}
                >
                  <Image
                    src={"/images/wireless-webcam.png"}
                    alt="qr-code"
                    fill
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
            </div>
          </div>
        </div>
        {/* smart security system */}
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default SafetySecurity;