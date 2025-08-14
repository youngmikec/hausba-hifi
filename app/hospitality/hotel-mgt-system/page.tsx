"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const HotelManagementSystem: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/african-woman.png"} />
      <div>
        {/* Guest Management Entry */}
        <div className='w-10/12 mx-auto md:w-9/12 mt-10'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/elevator-button.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    check in, your way.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Guests manage entry, check-in, and services—all seamlessly, without waiting.
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Guest Management Entry */}

        {/* Build Management System */}
        <div className="my-40 bg-black py-20">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-[20px] md:text-[27px] text-white font-montserrat font-semibold my-2">Building Management System</p>
            <p className="text-center text-primary my-4 font-montserrat">efficiency, everywhere.</p>
            <p className="text-center text-sm my-4 font-montserrat text-white">Automate lighting, climate, and energy use across your property with precision.</p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/team-bonding.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>
        {/* Build Management System */}

        {/* Api Integration */}
        <div className='w-10/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">API Integration</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    flexibility unlocked
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Connect systems effortlessly, customizing control and data flow to your needs.
                  </p>
                </div>
              </div>
              <div 
                className="relative h-[200px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/pin-board.png)',
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
        {/* Api Integration */}

      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default HotelManagementSystem;