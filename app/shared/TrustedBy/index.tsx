'use client'
import { FC, useState } from 'react';
import Image from 'next/image';
import { DevelopersLogos, ArchitectsLogos, MEPLogos } from '@/app/constants';

const tabs = [
  { key: 'developers', label: 'Developers', logos: DevelopersLogos },
  { key: 'architects', label: 'Architects', logos: ArchitectsLogos },
  { key: 'mep', label: 'MEP', logos: MEPLogos },
];

const TrustedBy: FC = () => {
  const [active, setActive] = useState<string>(tabs[0].key);
  const activeTab = tabs.find(t => t.key === active)!;

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 font-montserrat">trusted by the best in the industry</h2>

      <div className="flex justify-center gap-8 text-sm md:text-base font-medium mb-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`relative pb-2 transition-colors ${active === tab.key ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tab.label}
            {active === tab.key && (<span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-primary rounded-full"></span>)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activeTab.logos.map((logo, idx) => (
          <div
            key={`${active}-${idx}`}
            className="rounded-2xl border border-black/50 p-6 flex items-center justify-center bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image src={logo} alt={`${active}-logo-${idx}`} width={220} height={120} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
