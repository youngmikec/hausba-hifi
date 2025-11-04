import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



const Footer: FC = () => {
    return (
        <>
            <div className="bg-black-gray text-white">
                <div className="px-10 py-10">
                    <div className="flex justify-between mb-8">
                        <div>
                            <div className="mb-4">
                                <Image 
                                    src={'/images/Logo_white.png'}
                                    width={100}
                                    height={50}
                                    alt={'logo'}
                                />
                            </div>
                            <div>
                                <p className="text-white text-sm w-full md:w-6/12">
                                    The world’s best audio, video, security 
                                    and lighting control with bespoke design.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <MdOutlineMailOutline size={20} color="white" />
                                <p className="text-white text-sm">support@hausba.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-20 mb-10">
                        <div className="flex justify-start gap-12 md:gap-40">
                            <div>
                                <p className="font-montserrat text-white font-semibold text-sm mb-4">COMPANY</p> 

                                <div>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/blogs"}
                                        >
                                            <span>Blog</span>
                                        </Link>
                                    </p>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/about-us"}
                                        >
                                            <span>About Us</span>
                                        </Link>
                                    </p>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/contact-us"}
                                        >
                                            <span>Contact Us</span>
                                        </Link>
                                    </p>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/projects"}
                                        >
                                            <span>Our Portfolio</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-montserrat text-white font-semibold text-sm mb-4">LEGAL</p> 

                                <div>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/terms-and-conditions"}
                                        >
                                            <span>Terms & Conditions</span>
                                        </Link>
                                    </p>
                                    <p className="my-4">
                                        <Link
                                            className="font-montserrat text-white my-4 text-sm"
                                            href={"/privacy-policy"}
                                        >
                                            <span>Privacy Policy</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                        </div>



                        <div>
                            <p className="font-montserrat text-white font-semibold text-sm mb-4">SUBSCRIBE TO OUR NEWSLETTER</p>
                            <p className="font-montserrat text-white text-sm mb-4">Get the latest updates and exclusive tips </p>
                            <div className="flex gap-4">
                                <div className="w-full">
                                    <input 
                                        type="email" 
                                        className="w-full placeholder:text-white rounded-lg border-[1px] border-gray-lightest text-white bg-gray py-3 px-4 focus:outline-none"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <button className="bg-primary text-white rounded-lg px-6 py-3 text-center w-max">Visit Hausba</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// {/* Footer links */}
// <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//     <div>
//         <p className="font-montserrat text-black font-semibold text-sm mb-4">Services</p>
//         {
//             FooterLinks.services.map((link: AppLink, idx: number) => (
//                 <p key={idx} className="my-4">
//                     <Link
//                         className="font-montserrat text-gray my-4 text-sm"
//                         href={link.path}
//                     >
//                         <span>{link.title}</span>
//                     </Link>
//                 </p>
//             ))
//         }
//     </div>
//     <div>
//         <p className="font-montserrat text-black font-semibold text-sm mb-4">Menu</p>
//         {
//             FooterLinks.menu.map((link: AppLink, idx: number) => (
//                 <p key={idx} className="my-4">
//                     <Link
//                         className="font-montserrat text-gray my-4 text-sm"
//                         href={link.path}
//                     >
//                         <span>{link.title}</span>
//                     </Link>
//                 </p>
//             ))
//         }
//     </div>
//     <div>
//         <p className="font-montserrat text-black font-semibold text-sm mb-4">Socials</p>
//         {
//             FooterLinks.socials.map((link: AppLink, idx: number) => (
//                 <p key={idx} className="my-4">
//                     <Link
//                         className="font-montserrat text-gray my-4 text-sm"
//                         href={link.path}
//                     >
//                         <span>{link.title}</span>
//                     </Link>
//                 </p>
//             ))
//         }
//     </div>
// </div>
// {/* Footer links */}

export default Footer;