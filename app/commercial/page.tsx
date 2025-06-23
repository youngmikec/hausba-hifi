"use client";

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";


import Banner from '../components/app/Banner';
import ContactForm from '../components/app/ContactForm';
import HomeLayout from '../components/layouts/home-layout';

const Commercial: FC = () => {
  return (
    <HomeLayout>
        <Banner bgImg={"/images/commercial-banner.png"} />
        <div className="min-h-[350px] w-full bg-black-gray pb-6">
            <div className="w-9/12 sm:w-6/12 md:w-4/12 mx-auto">
                <div className="-mt-20  mb-32 z-20">
                    <div className="relative w-full h-[250px] mb-8">
                        <Image
                            src={'/images/default-banner.png'}
                            alt="display"
                            fill
                            objectFit='cover'
                            objectPosition='top'
                        />
                    </div>

                    <div>
                        <div className="mb-4">
                            <p className="text-white text-lg">huddles & meeting rooms with</p>
                            <p className="font-montserrat font-semibold text-2xl text-white">HAUSBA</p>
                        </div>
                        <div className="my-4">
                            <p className="text-white font-montserrat text-justify">
                                Step into a space that works as hard as you do. Begin your meetings in perfect sync lights, 
                                screens, and conferencing tools all set with a single touch. 
                                From spontaneous brainstorming to high-level video calls, <span className='font-semibold'>HAUSBA</span> transforms ordinary rooms into intuitive, collaborative environments. 
                                Cast from any device. Share ideas effortlessly. Control the atmosphere with a tap or voice command. <br />
                                <span className="font-semibold">
                                    Because when your workspace responds to you, ideas 
                                    flow freely.
                                </span>
                            </p>
                        </div>
                        <div>
                            <Link href={"/commercial/"} className="text-primary flex gap-4 justify-start items-center">
                                <span>Huddles & Meeting Rooms</span>
                                <FaArrowRightLong size="15" className='text-primary' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full pb-6">
            <div className="w-11/12 sm:w-10/12 md:w-10/12 lg:w-9/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="-mt-20  mb-32 z-20">
                        <div className="relative w-full h-[250px] mb-8">
                            <Image
                                src={'/images/default-banner.png'}
                                alt="display"
                                fill
                                objectFit='cover'
                                objectPosition='top'
                            />
                        </div>

                        <div>
                            <div className="mb-4">
                                <p className="font-montserrat font-semibold text-2xl text-black">HAUSBA</p>
                                <p className="text-gray-dark text-sm font-normal">designed to captivate every seat</p>
                            </div>
                            <div className="my-4">
                                <p className="text-black font-montserrat text-left">
                                    Whether it’s a keynote, live performance, or hybrid conference, <span className="font-semibold">HAUSBA </span> 
                                    auditorium solutions bring sound, visuals, and atmosphere together in perfect harmony. 
                                    From crowd microphones to video walls and AV automation, every detail is engineered to elevate the experience for the speaker,
                                    and every guest in the room. <br />
                                    <span className="font-semibold">
                                        Immersive experiences. Seamless control. Lasting impressions.
                                    </span>
                                </p>
                            </div>
                            <div>
                                <Link href={"/commercial/auditorium"} className="text-primary flex gap-4 justify-start items-center">
                                    <span>Auditorium</span>
                                    <FaArrowRightLong size="15" className='text-primary' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-20  mb-32 z-20">
                        <div className="relative w-full h-[250px] mb-8">
                            <Image
                                src={'/images/default-banner.png'}
                                alt="display"
                                fill
                                objectFit='cover'
                                objectPosition='top'
                            />
                        </div>

                        <div>
                            <div className="mb-4">
                                <p className="text-black text-lg">Strategy and simplicity with</p>
                                <p className="font-montserrat font-semibold text-2xl text-black">HAUSBA</p>
                            </div>
                            <div className="my-4">
                                <p className="text-black font-montserrat text-left">
                                    From executive briefings to dynamic training sessions, 
                                    <span className="font-semibold">HAUSBA</span> empowers your boardroom with technology that feels 
                                    invisible but performs flawlessly. Present wirelessly, enhance every voice in the room, and connect 
                                    to any platform with ease. Lighting, sound, video, and climate adapt seamlessly so you can focus on ideas,
                                     not interfaces. <br />
                                    <span className="font-semibold">
                                        Because great decisions deserve great environments.
                                    </span>
                                </p>
                            </div>
                            <div>
                                <Link href={"/commercial/board-room"} className="text-primary flex gap-4 justify-start items-center">
                                    <span>Board Rooms & Training Rooms</span>
                                    <FaArrowRightLong size="15" className='text-primary' />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <ContactForm />
    </HomeLayout>
  );
}

export default Commercial;