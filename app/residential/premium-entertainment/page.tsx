"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const PremiumEntertainment: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/man-and-woman.png"} />
      <div>
        {/* private theatre */}
        <div className='w-11/12 mx-auto md:w-9/12 my-32'>
          <div className="px-10 py-6 w-full min-h-[200px] my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative" 
                style={{ 
                  minHeight: "600px",
                  maxHeight: "600px",
                  background: 'url(/images/dark-cinema-room.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[24px] md:text-[38px] font-bold text-gray font-montserrat my-2">your private theatre</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    A single tap, and the lights dim, the curtains draw, and your screen comes alive. 
                    Hausba’s dedicated home cinema transforms movie nights into immersive experiences—with breathtaking visuals, 
                    rich surround sound, and custom-designed comfort. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* private theatre */}
        
        {/* Audio */}
        <div className='w-11/12 mx-auto md:w-9/12 my-32'>
            <div className="px-10 py-6 w-full min-h-[200px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-left text-[24px] md:text-[38px] font-bold text-gray font-montserrat my-2">whole house audio & video</p>
                        <p className="text-left text-[20px] md:text-[27px] text-gray-light font-montserrat font-semibold my-2">entertainment, everywhere</p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          With just a tap, your favorite playlist flows from room to room, 
                          or the big game follows you as you move through your space. 
                          Hausba’s seamlessly integrated audio and video systems turn your entire home into a personalized entertainment hub—crystal 
                          clear sound, stunning visuals, and effortless control, wherever you are.
                        </p>
                    </div>
                </div>
                <div 
                  className="relative" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px",
                    background: 'url(/images/stereo-speakers.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                {/* <div 
                  className="relative" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px"
                  }}
                >
                  <Image
                    src={"/images/stereo-speakers.png"}
                    alt="stereo-speakers"
                    fill
                    className="w-full h-full"
                    objectFit="contain"
                  />
                </div> */}
              </div>
            </div>
        </div>
        {/* Audio */}
        

        <div className="bg-black h-max py-12">
          <div className="mx-auto w-11/12 md:w-9/12 my-6">
            <div 
              className="mb-8"
              style={{ 
                height: "500px",
                background: 'url(/images/wooden-floor-room.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '5px'
              }}
            >
            </div>

            <div className="my-8">
              <p className="w-9/12 md:w-66/12 text-center text-[24px] md:text-[38px] font-white text-white font-montserrat my-4">pure sound, pure emotion</p>
              <p className="w-9/12 md:w-5/12 mx-auto text-center text-[16px] md:text-[16px] text-white font-montserrat my-4">
                One tap, and the room fills with flawless sound—every note crisp, 
                every beat precise. From soft background music to heart-pounding concert quality, 
                Hausba’s high-performance audio systems deliver rich, immersive sound exactly where and how you want it. 
                Feel the difference, hear the detail.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default PremiumEntertainment;