"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';


const BoardRoom: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/strategy-meeting.png"} />
      <div>
        {/* Video Walls */}
        <div className='w-10/12 mx-auto md:w-9/12 my-32 relative'>
          <div className="absolute w-[1.5px] h-[220px] bg-black -top-48 z-20"></div>
          <div className="mb-20 px-4">
            <p className="text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Video Walls</p>
            <p className="text-black font-montserrat w-full md:w-4/12">
              From multi-screen content to interactive displays, captivate your audience with dynamic visuals that make an impact — every pixel, perfectly placed.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/woman-with-solar-panel.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>
        {/* Video Walls */}

        {/* Advanced AV Automation */}
        <div className='w-10/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[200px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/blue-office-with-teams.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Advanced AV Automation</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    With Hausba’s advanced AV automation, 
                    your boardroom or auditorium transforms itself with a single touch. 
                    Lighting adjusts, screens drop down, blinds close, and sound systems come alive — 
                    all perfectly synchronised for your meeting, presentation, or event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Advanced AV Automation */}

        <div className="my-40">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-[20px] md:text-[27px] text-gray-light font-montserrat font-semibold my-2">Advanced AV Conferencing</p>
            <p className="text-center text-primary my-4 font-montserrat">Your message, clearly delivered</p>
            <p className="text-center text-sm my-4 font-montserrat">
              Whether you’re connecting teams across the globe or addressing hundreds on-site, 
              Hausba’s advanced AV conferencing ensures every word is heard and every face is seen — crystal clear and delay-free.
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/hd-tv-movie.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>

      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default BoardRoom;