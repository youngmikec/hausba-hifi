"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const SpacesApplication: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/guys-with-tab.png"} />
      <div>
        {/* Lobbies & Public Spaces */}
        <div className='w-10/12 mx-auto md:w-9/12 my-20'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Lobbies & Public Spaces</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    First impressions, elevated.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    From the moment guests step in, lighting, sound, and climate adjust automatically to create a welcoming, 
                    luxurious atmosphere. 
                    Every entrance feels intentional, every moment feels curated.
                  </p>
                </div>
              </div>
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/business-meeting.png)',
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
        {/* Lobbies & Public Spaces */}
        {/* Restaurants & Lounges */}
        <div className='w-10/12 mx-auto md:w-9/12 mt-10'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/ladies-night.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Restaurants & Lounges</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    Dine in perfect mood.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Lighting and audio shift seamlessly from bright breakfasts to intimate dinners, crafting the ideal ambiance for every meal. 
                    Guests enjoy an experience that’s as tasteful as the cuisine.
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Restaurants & Lounges */}

        {/* Banquet Halls */}
        <div className="my-40 bg-black py-20">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-[20px] md:text-[27px] text-white font-montserrat font-semibold my-2">Banquet Halls</p>
            <p className="text-center text-primary my-4 font-montserrat">events, flawlessly set.</p>
            <p className="text-center text-sm my-4 font-montserrat text-white">
              Whether it’s a wedding or a corporate gala, lighting, AV, and climate 
              adjust with a single touch to match the occasion. 
              Your event space is always ready, ensuring every gathering feels special.
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/event-organizer-with-guests.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>
        {/* Banquet Halls */}

      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default SpacesApplication;