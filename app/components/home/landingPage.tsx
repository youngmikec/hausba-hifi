'use client';

import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
    const residentialBg: string = '/images/new-imgs/residential-page.jpeg';
    const commercialBg: string = '/images/new-imgs/commercial-page.png';

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-20 px-6 py-8 bg-[#00000080]">
                <div className="max-w-7xl mx-auto text-center space-y-3 animate-fade-in">
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src="/images/Logo_white.png"
                            alt="Hausba"
                            width={150}
                            height={50}
                        />
                    </div>
                    <p className="text-sm md:text-base text-white w-full md:w-1/3 mx-auto">
                        We are AV Professionals, crafting AV experiences to transform the way you live and work
                    </p>
                </div>
            </header>

            {/* Split Screen Container */}
            <div className="h-screen w-full flex flex-col md:flex-row">
                {/* Residential Section */}
                <section className="relative flex-1 group overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${residentialBg})` }}
                    />
                
                    {/* Overlay */}
                    <div className="absolute inset-0 overlay-gradient" />
                
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
                        <div className="space-y-16 animate-fade-in">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white text-shadow-lg lowercase">
                                residential
                            </h2>
                        
                            <div className="flex justify-center mt-12">
                                <nav className="space-y-4">
                                    <Link
                                        href="#luxury-units"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Luxury Multi-Dwelling Units &gt;
                                    </Link>
                                    <Link
                                        href="#residential-villas"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Large Residential Villas &gt;
                                    </Link>
                                    <Link
                                        href="#reference-cinemas"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Reference Cinemas &gt;
                                    </Link>
                                </nav>
                            </div>

                        
                            <div className="flex justify-center">
                                <Link
                                    href="/residential"
                                    className="mt-8 border-2 border-white text-white hover:bg-white/10 hover:border-white/50 rounded-full px-12 py-2 backdrop-blur-sm"
                                >
                                    Start Here
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commercial Section */}
                <section className="relative flex-1 group overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform scale-105 duration-700 group-hover:scale-110"
                        style={{ 
                            backgroundImage: `url(${commercialBg})`,
                            backgroundSize: "cover"
                        }}
                    />
                
                    {/* Overlay */}
                    <div className="absolute inset-0 overlay-gradient" />

                    {/* Content */}
                    <div className="relative h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
                        <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white text-shadow-lg lowercase">
                                commercial
                            </h2>
                        
                            <div className="flex justify-center mt-12">
                                <nav className="space-y-3">
                                    <Link
                                        href="#av-collaboration"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Audio & Video Collaboration &gt;
                                    </Link>
                                    <Link
                                        href="#office-buildings"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Modern Office Buildings & Workspaces &gt;
                                    </Link>
                                    <Link
                                        href="#worship"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Houses of Worship &gt;
                                    </Link>
                                    <Link
                                        href="#event-centers"
                                        className="block text-primary hover:text-white text-center transition-colors text-sm md:text-base font-medium"
                                    >
                                        Lounges & Event Centers &gt;
                                    </Link>
                                </nav>
                            </div>
                            
                            <div className="flex justify-center">
                                <Link
                                    href="/commercial"
                                    className="mt-8 border-2 border-white text-white hover:bg-white/10 hover:border-white/50 rounded-full px-12 py-2 backdrop-blur-sm"
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