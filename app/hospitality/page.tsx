"use client";

import Link from 'next/link';
import Banner from '../components/app/Banner';
import SpeakToConsultant from '../components/app/Speak-To-Consultant';
import HomeLayout from '../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const Hospitality: FC = () => {
  return (
    <HomeLayout>
        <Banner bgImg={"/images/hospitality-banner.png"} />
        <div className="min-h-[250px] w-full bg-black-gray pb-36 z-10">
          {/* hospitality */}
          <div className='w-11/12 mx-auto md:w-9/12 mb-32'>
            <div className="px-10 pb-6 pt-0 w-full min-h-[200px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
                <div className="h-full flex justify-center items-center">
                  <div className="flex-col gap-4">
                    <p className="text-left text-[20px] md:text-[27px] text-white font-montserrat font-semibold my-2">hospitality that thinks for itself with</p>
                    <p className="text-left text-[24px] md:text-[38px] font-bold text-white font-montserrat my-2">Hausba</p>
                    <p className="w-full text-left text-[16px] md:text-[16px] text-white font-montserrat my-2">
                      Delight your guests from the moment they enter. 
                      With <b>HAUSBA’s</b> Guest Room Management System, lighting, climate, entertainment, 
                      and privacy settings adjust automatically to their presence and preferences all accessible via sleek touch panels, 
                      mobile apps, or voice control. From personalised welcome scenes to seamless check-out automation, every moment is curated for ease, elegance, and excellence.
                    </p>
                    <p className="text-[16px] md:text-[16px] text-white font-bold font-montserrat my-2">
                      Turn every stay into a five-star experience without lifting a finger.
                    </p>

                    <Link href="/hospitality/guest-room-mgt" className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat">
                      <span>Guest Room Management System</span>
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
                    background: 'url(/images/hotel-manager-customer.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 30
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* hospitality */}
        </div>
        {/* hotel management */}
        <div className='w-11/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative -mt-16" 
                style={{ 
                  minHeight: "600px",
                  maxHeight: "600px",
                  background: 'url(/images/african-woman.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">Hausba</p>
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">the intelligence behind exceptional hospitality</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Behind every unforgettable stay is a system that works flawlessly in the background. 
                    HAUSBA’s Hotel Management Solutions integrate lighting, climate, access control, energy management,
                    and service automation into one unified platform designed to enhance efficiency while reducing operational costs. 
                    Empower your staff, reduce response times, and create a hotel environment that runs as smoothly as it feels.
                  </p>
                  <p className="text-[16px] md:text-[16px] text-black font-bold font-montserrat my-2">
                    Because true luxury is not just seen it’s silently, seamlessly felt.
                  </p>

                  <Link 
                    href="/hospitality/hotel-mgt-system" 
                    className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat"
                  >
                    <span>Hotel management Solutions</span>
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
        {/* hotel management */}

        {/* spaces-application */}
        <div className='w-11/12 mx-auto md:w-9/12 mt-12 mb-32'>
          <div className="px-10 pb-6 pt-0 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">every space, expertly orchestrated by</p>
                  <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">Hausba</p>
                  <p className="w-full text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    From grand lobbies to intimate guest suites, 
                    <b>HAUSBA</b> delivers intelligent solutions that adapt to the function and feel of each space. 
                    Whether it’s a restaurant that sets the perfect mood with music and lighting, or a conference room ready for global connection, 
                    every area is seamlessly equipped for performance and ambiance.
                    One system. Infinite possibilities. Every detail, refined.
                  </p>

                  <Link href="/hospitality/spaces-application" className="flex justify-start items-center gap-4 my-6 text-center text-[13px] md:text-[14px] text-primary font-montserrat">
                    <span>Spaces & Application</span>
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
                className="relative -mt-6" 
                style={{ 
                  minHeight: "600px",
                  maxHeight: "600px",
                  background: 'url(/images/guys-with-tab.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 30
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* spaces-application */}
        <SpeakToConsultant />
    </HomeLayout>
  );
}

export default Hospitality;