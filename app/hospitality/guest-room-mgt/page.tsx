"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GuestRoomManagementSystem: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/hotel-manager-customer.png"} />
      <div>
        {/* Control Room */}
        <div className='w-10/12 mx-auto md:w-9/12 my-32 relative'>
          <div className="absolute w-[1.5px] h-[220px] bg-black -top-48 z-20"></div>
          <div className="mb-20 px-4">
            <p className="text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Luxury, on Cue.</p>
            <p className="text-black font-montserrat w-full md:w-4/12">Lights, climate, and entertainment adjust automatically for each guest’s perfect stay.</p>
          </div>
          <div className="flex justify-end items-center">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/tourist-with-phone.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>
        {/* Control Room */}
        {/* Control Room */}
        <div className='w-10/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[300px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/termostat-controller.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Integrated Room Controls</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    all in one touch.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Guests control lights, shades, and climate effortlessly from a sleek interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Control Room */}

        <div className="my-40">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-[20px] md:text-[27px] text-gray-light font-montserrat font-semibold my-2">Advanced Occupancy Management</p>
            <p className="text-center text-primary my-4 font-montserrat">Senses your presence.</p>
            <p className="text-center text-sm my-4 font-montserrat">Rooms respond as guests arrive, conserving energy when empty.</p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/studying-in-bed.png"
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

export default GuestRoomManagementSystem;