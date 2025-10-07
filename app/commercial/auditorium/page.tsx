"use client";

import SpeakToConsultant from '@/app/components/app/Speak-To-Consultant';
import Banner from '../../components/app/Banner';
import HomeLayout from '../../components/layouts/home-layout';
import { FC } from 'react';
import Image from 'next/image';

const Auditorium: FC = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/meeting-call.png"} />
      <div>
        {/* Multimedia Presentation */}
        <div className='w-10/12 mx-auto md:w-9/12 my-20'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-left text-[20px] md:text-[27px] text-black font-montserrat font-semibold my-2">Multimedia Presentation</p>
                  <p className="text-[16px] md:text-[16px] text-primary font-bold font-montserrat my-2">
                    engage every sense.
                  </p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Hausba’s multimedia presentation solutions blend high-definition visuals with immersive audio to bring your content to life. 
                    From 4K projectors to seamless digital signage, every slide, video, and graphic pops off the screen—keeping participants focused, 
                    informed, and inspired throughout your session.
                  </p>
                </div>
              </div>
              <div 
                className="relative h-[150px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/tape-projector.png)',
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
        {/* Multimedia Presentation */}


        {/* speech enhancement */}
        <div className="my-40">
          <div className="w-10/12 mx-auto md:w-9/12">
            <p className="text-center text-[20px] md:text-[27px] text-gray-light font-montserrat font-semibold my-2">speech enhancement</p>
            <p className="text-center text-primary my-4 font-montserrat">be heard, loud and clear.</p>
            <p className="text-center text-sm my-4 font-montserrat">
              Don’t let room acoustics hold your message back. 
              Hausba’s speech enhancement systems use precision microphones, 
              intelligent DSP, and in-ceiling or boundary speakers to ensure crisp, intelligible audio.
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="relative rounded-[16px] w-10/12 md:w-9/12 h-[300px] md:h-[500px] object-left">
              <Image
                src="/images/golden-microphone.png"
                alt="studying-in-bed"
                className='rounded-[16px]'
                fill
                objectFit='cover'
                objectPosition='center center'
              />
            </div>
          </div>
        </div>   
        {/* speech enhancement */}6


        {/* Real time collaboration */}
        <div className='w-10/12 mx-auto md:w-9/12'>
          <div className="px-10 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
              <div 
                className="relative h-[200px] md:h-[600px]" 
                style={{ 
                  background: 'url(/images/friends-watching-tv.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 20
                }}
              >
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="flex-col gap-4">
                  <p className="text-primary my-4 font-montserrat">collaborate in real time.</p>
                  <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                    Transform passive viewing into active participation with Hausba’s interactive E-boards. 
                    Touch-enabled screens, digital white-boarding tools, and real-time annotation let teams sketch ideas, mark up documents,
                    and save their work instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Real time collaboration */}     

      </div>
      <SpeakToConsultant />
    </HomeLayout>
  );
}

export default Auditorium;