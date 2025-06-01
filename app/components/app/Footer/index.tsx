import { AppLink, FooterLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



const Footer: FC = () => {
    return (
        <>
            <div className="px-10 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <div>
                        <div className="mb-4">
                            <Link className="navbar-brand pt-2" href="/">
                                <Image 
                                    src={'/images/logo-black.png'}
                                    width={100}
                                    height={100}
                                    alt={'logo'}
                                />
                            </Link>  
                        </div>

                        <div className="my-4">
                            <p className="font-montserrat text-gray text-sm w-full md:w-6/12">The world’s best audio, video, security and lighting control with bespoke design.</p>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <p className="font-montserrat text-black font-semibold text-sm mb-4">Services</p>
                            {
                                FooterLinks.services.map((link: AppLink, idx: number) => (
                                    <p key={idx} className="my-4">
                                        <Link
                                            className="font-montserrat text-gray my-4 text-sm"
                                            href={link.path}
                                        >
                                            <span>{link.title}</span>
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                        <div>
                            <p className="font-montserrat text-black font-semibold text-sm mb-4">Menu</p>
                            {
                                FooterLinks.menu.map((link: AppLink, idx: number) => (
                                    <p key={idx} className="my-4">
                                        <Link
                                            className="font-montserrat text-gray my-4 text-sm"
                                            href={link.path}
                                        >
                                            <span>{link.title}</span>
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                        <div>
                            <p className="font-montserrat text-black font-semibold text-sm mb-4">Socials</p>
                            {
                                FooterLinks.socials.map((link: AppLink, idx: number) => (
                                    <p key={idx} className="my-4">
                                        <Link
                                            className="font-montserrat text-gray my-4 text-sm"
                                            href={link.path}
                                        >
                                            <span>{link.title}</span>
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    {/* Footer links */}

                    <div>
                        <p className="font-montserrat text-black font-semibold text-sm mb-4">SUBSCRIBE TO OUR NEWSLETTER</p>
                        <div>
                            <input 
                                type="email" 
                                className="w-full placeholder:text-gray-lightest rounded-lg border-[1px] border-gray-lightest py-3 px-4 focus:outline-none"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <Link href={"/terms-and-conditions"}>
                        <p className="font-montserrat text-gray">Terms and Conditions</p>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-dark flex justify-center items-center w-full h-[130px]">
                <Image
                    src={'/images/Logo_white.png'}
                    width={400}
                    height={150}
                    alt={'logo'}
                />
            </div>
        </>
    )
}

export default Footer;