'use client';

import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
    const residentialBg: string = '/images/new-imgs/residential-page.jpeg';
    const commercialBg: string = '/images/new-imgs/commercial-page.png';

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-20 px-6 py-8 bg-[#000000]">
                <div className="max-w-7xl mx-auto text-center space-y-3 animate-fade-in">
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src="/images/Logo_white.png"
                            alt="Hausba"
                            width={150}
                            height={50}
                        />
                    </div>
                </div>
            </header>

            {/* Split Screen Container */}
            <div className="h-screen w-full flex flex-col md:flex-row">
                {/* Residential Section */}
                <section className="relative flex-1 h-full group overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ 
                            backgroundImage: `url(${residentialBg})`,
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay",
                            backgroundColor: "rgba(0, 0, 0, 0.7)"
                        }}
                    />
                
                    {/* Overlay */}
                    <div className="absolute inset-0 overlay-gradient" />
                
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
                        <div className="space-y-16 animate-fade-in">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg font-montserrat">
                                RESIDENTIAL
                            </h2>
                        
                            <div className="flex justify-center items-center my--auto">
                                <nav className="space-y-4">
                                    <Link
                                        href="/residential/multi-dwelling-unit"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Luxury Multi-Dwelling Units &gt;
                                    </Link>
                                    <Link
                                        href="/residential/large-residential-villas"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Large Residential Villas &gt;
                                    </Link>
                                    <Link
                                        href="/residential/reference-cinemas"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Reference Cinemas &gt;
                                    </Link>
                                </nav>
                            </div>

                        
                            <div className="flex justify-center">
                                <Link
                                    href="/residential"
                                    className="mt-8 border-[1px] border-white text-white hover:bg-white/10 hover:border-white/50 rounded-full px-12 py-2 backdrop-blur-sm font-montserrat text-sm"
                                >
                                    Start Here
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commercial Section */}
                <section className="relative flex-1 h-full group overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform scale-105 duration-700 group-hover:scale-110"
                        style={{ 
                            backgroundImage: `url(${commercialBg})`,
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay",
                            backgroundColor: "rgba(0, 0, 0, 0.8)"
                        }}
                    />
                
                    {/* Overlay */}
                    <div className="absolute inset-0 overlay-gradient" />

                    {/* Content */}
                    <div className="relative h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
                        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white text-shadow-lg font-montserrat">
                                COMMERCIAL
                            </h2>
                        
                            <div className="flex justify-center mt-12">
                                <nav className="space-y-3">
                                    <Link
                                        href="/commercial/audio-video-collaboration"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Audio & Video Collaboration &gt;
                                    </Link>
                                    <Link
                                        href="/commercial/modern-office-buildings"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Modern Office Buildings & Workspaces &gt;
                                    </Link>
                                    <Link
                                        href="/commercial/houses-of-worship"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Houses of Worship &gt;
                                    </Link>
                                    <Link
                                        href="/commercial/lounges-event-centers"
                                        className="block text-primary hover:text-white text-center transition-colors text-xs md:text-sm font-medium font-montserrat"
                                    >
                                        Lounges & Event Centers &gt;
                                    </Link>
                                </nav>
                            </div>
                            
                            <div className="flex justify-center">
                                <Link
                                    href="/commercial"
                                    className="mt-8 border-[1px] border-white text-white hover:bg-white/10 hover:border-white/50 rounded-full px-12 py-2 backdrop-blur-sm font-montserrat text-sm"
                                >
                                    Start Here
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;