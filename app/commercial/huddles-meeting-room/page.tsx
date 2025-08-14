"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const HuddlesMeetingRoom: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/analytic-summary.png"} />
      <div>
        {/* Wireless Presentation */}
        <div className='w-10/12 mx-auto md:w-9/12 my-20'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Wireless Presentation</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    share with a tap.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    No cables, no delays. With Hausba’s wireless presentation solutions, 
                    your team can cast content effortlessly from iOS and Android devices via AirPlay, 
                    turning any meeting into a seamless sharing experience. 
                    Whether it’s a quick huddle or a critical pitch, presentations flow naturally, keeping everyone engaged.
                  </p>
                </div>
              </div>
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/yellow-seat-office.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
            </div>
          </div>
        </div>
        {/* Wireless Presentation */}
        {/* meet with ease. */}
        <div className='w-10/12 mx-auto md:w-9/12 mt-10'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/empty-office-seats.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">meet with ease.</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Step into a space where collaboration simply works. 
                    With Hausba’s native Zoom and Microsoft Teams Rooms, 
                    your meetings launch instantly with one tap, bringing crystal-clear audio, sharp video, 
                    and effortless screen sharing to your team and clients. 
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* meet with ease. */}

        {/* Step into readiness. */}
        <div className="my-40 bg-black py-20">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-primary my-4 font-montserrat">Step into readiness.</p>
            <p className="text-center text-sm my-4 font-montserrat text-white">
              Hausba’s room scheduling system ensures your meeting space 
              is prepared the moment you need it—shades drawn, lights set, 
              AV ready. Just walk in, connect, and begin.
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/motion-blur.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>
        {/* Step into readiness. */}

      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default HuddlesMeetingRoom;