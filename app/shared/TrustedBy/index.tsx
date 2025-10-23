'use client'
import { FC } from 'react';
import Image from 'next/image';
import { DevelopersLogos } from '@/app/constants';


const TrustedBy: FC = () => {

  return (
    <section className="w-full h-screen max-w-6xl mx-auto mt-8 py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 font-montserrat">trusted by the best in the industry</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DevelopersLogos.map((logo, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-black/50 p-6 flex items-center justify-center bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image src={logo} alt={`developer-logo-${idx}`} width={220} height={120} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
