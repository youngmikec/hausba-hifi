"use client";

import Link from 'next/link';
import Banner from '../components/app/Banner';
import ContactForm from '../components/app/ContactForm';
import SpeakToConsultant from '../components/app/Speak-To-Consultant';
import HomeLayout from '../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const Residential: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/default-banner.png"} />
      <div className="min-h-[250px] w-full bg-black-gray pb-36 z-10">
        {/* premium entertainment */}
        <div className='w-11/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative -mt-16" 
                style={{ 
                  minHeight: "600px",
                  maxHeight: "600px",
                  background: 'url(/images/man-and-woman.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-white font-montserrat font-semibold my-2">a day with</p>
                  <p className="text-left text-[24px] md:text-[38px] font-bold text-white font-montserrat my-2">Hausba</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-white font-montserrat my-2">
                    From movie nights to music filled mornings. 
                    HAUSBA transforms your home into a sanctuary of shared luxury. 
                    Our seamlessly integrated cinemas, whole-house audio and hidden AV solutions create immersive experience 
                    all designed for beauty, comfort, and togetherness.
                  </p>

                  <Link 
                    href="/residential/premium-entertainment" 
                    className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat"
                  >
                    <span>Premium Entertainment</span>
                    <Image 
                      src="/images/arrow-right.png" 
                      alt="arrow-right" 
                      width={20} 
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* functionalities */}
      </div>

      {/* functionalities */}
      <div className='w-11/12 mx-auto md:w-9/12 mb-32'>
        <div className="px-10 pb-6 pt-0 w-full min-h-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            <div className="h-full flex justify-center items-center">
              <div className="flex-col gap-4">
                <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">functionalities of</p>
                <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">Hausba</p>
                <p className="w-full text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                  From lighting and climate to window shades and ambiance, 
                  personalise your home down to the finest detail. Set the perfect scene for family dinner, quiet evenings, 
                  or bright moments - all with a gentle tap on your phone, custom keypads, or beautifuly crafted remotes.
                </p>
                <p className="text-[16px] md:text-[16px] text-black font-bold font-montserrat my-2">
                  Turn everyday comfort into an experience of effortless luxury. Live in tune with your home.
                </p>

                <Link href="/residential/comfort-convenience" className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat my-2">
                  <span>Comfort & Convenience</span>
                  <Image 
                    src="/images/arrow-right.png" 
                    alt="arrow-right" 
                    width={20} 
                    height={20}
                  />
                </Link>
                </div>
            </div>
            <div 
              className="relative -mt-12" 
              style={{ 
                minHeight: "600px",
                maxHeight: "600px",
                background: 'url(/images/woman-in-kitchen.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 30
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* functionalities */}

      {/* home security */}
      <div className='w-11/12 mx-auto md:w-9/12 my-32'>
        <div className="px-10 py-6 w-full min-h-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
            <div 
              className="relative" 
              style={{ 
                minHeight: "600px",
                maxHeight: "600px",
                background: 'url(/images/woman-with-tablet.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
            <div className="h-full flex justify-center items-center">
              <div className="flex-col gap-4">
                <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">Hausba</p>
                <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">home security</p>
                <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                  From discreet surveillance to keyless entry, protect what matters most with intelligent 
                  systems tailored to your lifestyle. 
                  Be instantly alerted to any unexpected activity whether you are home or 
                  away and manage access with fingerprint precision on your mobile device. Feel safe.
                </p>
                <p className="w-full md:w-8/12 text-[16px] md:text-[16px] text-black font-bold font-montserrat my-2">Stay Connected. Live Freely.</p>

                <Link href="/residential/safety-security" className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat my-2">
                  <span>Safety & Security</span>
                  <Image 
                    src="/images/arrow-right.png" 
                    alt="arrow-right" 
                    width={20} 
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home security */}
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default Residential;