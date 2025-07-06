"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const ComfortConvenience: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/woman-in-kitchen.png"} />
      {/* perfect temperature */}
      <div className="px-10 py-6 w-full min-h-[200px] my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
          <div 
            className="relative" 
            style={{ 
              minHeight: "400px",
              maxHeight: "600px"
            }}
          >
            <Image
              src={"/images/hand-with-phone.png"}
              alt="qr-code"
              fill
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="flex-col gap-4">
              <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                A subtle swipe on your design keypad, or a tap on the app — that’s all it takes. 
                Instantly, the lights adjust to your mood, casting the perfect glow for work, 
                play, or rest. Whether it’s a soft sunrise to wake you gently or a warm welcome as you return home, 
                Hausba’s smart lighting transforms every moment into an experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* perfect temperature */}
      {/* perfect temperature */}
      <div className='w-11/12 mx-auto md:w-9/12 my-32'>
          <div className="px-10 py-6 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">perfect temperature</p>
                        <p className="w-full text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          A tap on the app or a touch on the wall—Hausba’s smart 
                          climate control ensures your home feels just right, all day long. 
                          Whether you want a cool retreat on a warm afternoon or cozy comfort on a rainy night, 
                          your environment adjusts automatically to your preferences. Every room, always at its best.ace of mind. 
                        </p>
                    </div>
                </div>
                <div 
                  className="relative flex justify-start items-center" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px",
                    background: 'url(/images/color-adjuster.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* <Image
                    src={"/images/color-adjuster.png"}
                    alt="qr-code"
                    fill
                    className="w-full h-full"
                    objectFit="contain"
                  /> */}
                </div>
            </div>
          </div>
      </div>
      {/* perfect temperature */}


      {/* motorized shades */}
      <div className='w-11/12 mx-auto md:w-9/12 my-32'>
        <div className="px-10 py-6 w-full min-h-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
            <div 
              className="relative" 
              style={{ 
                minHeight: "600px",
                maxHeight: "600px",
                background: 'url(/images/room-view.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
            <div className="h-full flex justify-center items-center">
              <div className="flex-col gap-4">
                  <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">motorized shades</p>
                  <p className="text-left text-[20px] md:text-[27px] text-primary font-montserrat font-semibold my-2">privacy. light. perfection.</p>
                  <p className="w-full text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    One tap is all it takes. As the shades glide down in perfect silence, 
                    sunlight softens and privacy embraces your space. From sunrise to sunset, 
                    Hausba’s motorized window treatments adjust to your rhythm—whether you want to frame the view, 
                    reduce glare, or create total seclusion at a moment’s notice.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* motorized shades */}
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default ComfortConvenience;