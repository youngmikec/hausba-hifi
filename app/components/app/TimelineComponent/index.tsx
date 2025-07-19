
import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'top' | 'bottom';
}

const Timeline = () => {
  const firstEventList: TimelineEvent[] = [
    {
      year: '2010',
      title: 'Company Founded',
      description: '',
      position: 'top'
    },
    {
      year: '2015',
      title: 'Launched the first High-End Smart Home Experience centre in Abuja',
      description: '',
      position: 'bottom'
    },
    {
      year: '2017',
      title: 'Launched a second experience center in Lekki, Lagos.',
      description: '',
      position: 'top'
    },
    {
      year: '2021',
      title: 'Completed over 120 High End AV Projects',
      description: '',
      position: 'top'
    },
  ];

  const secondEventList: TimelineEvent[] = [
    {
      year: '2021',
      title: 'Founded NUODAL - A Technology Experience Company',
      description: '',
      position: 'top'
    },
    {
      year: '2022',
      title: 'Founded CEO AFRICA AV Distribution company',
      description: '',
      position: 'bottom'
    },
    {
      year: '2023',
      title: 'Launched SOUNDHOUS Experience Centre in VI',
      description: '',
      position: 'top'
    }
  ]

  return (
    <div className="min-h-screen mb-20 bg-black text-white py-16 px-4 md:px-0">
      <div className="">
        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white"></div>
            
            {firstEventList.map((event, index) => (
              <div key={index} className="relative mb-12 pl-16">
                {/* Dot */}
                <div className="absolute left-4 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2 border-2 border-black"></div>
                
                {/* Content */}
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-3xl font-bold text-orange-500 mb-2">{event.year}</h3>
                  <p className="text-white text-lg leading-relaxed">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block mb-10">
          <div className="relative ml-32 mt-24 py-20">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
            
            {/* Timeline events */}
            <div className="relative flex justify-around items-center">
              {firstEventList.map((event, index) => {
                const isTop = event.position === 'top';
                return (
                  <div key={index} className="relative flex flex-col items-center group">
                    {/* Content box */}
                    <div className={`absolute ${isTop ? 'bottom-12' : 'top-12'} w-64 text-center group-hover:scale-105 transition-transform duration-300`}>
                      <div className="hover:bg-gray-900 p-6 hover:rounded-lg hover:border hover:border-gray-800 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-orange-500 mb-3">{event.year}</h3>
                        <p className="text-white text-sm leading-relaxed">{event.title}</p>
                      </div>
                      
                      {/* Arrow pointing to timeline
                      <div className={`absolute left-1/2 transform -translate-x-1/2 ${
                        isTop ? '-bottom-2' : '-top-2'
                      }`}>
                        <div className={`w-0 h-0 ${
                          isTop 
                            ? 'border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800' 
                            : 'border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800'
                        }`}></div>
                      </div> */}
                    </div>
                    
                    {/* Timeline dot */}
                    {
                      index === 0 ? (
                        <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                      ) : (
                        <div className="flex">
                          <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                          <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                        </div>
                      )
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block mt-40">
          <div className="relative ml-0 mr-32 mb-24 py-20">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
            
            {/* Timeline events */}
            <div className="relative flex justify-around items-center">
              {secondEventList.map((event, index) => {
                const isTop = event.position === 'top';
                return (
                  <div key={index} className="relative flex flex-col items-center group">
                    {/* Content box */}
                    <div className={`absolute ${isTop ? 'bottom-12' : 'top-12'} w-64 text-center group-hover:scale-105 transition-transform duration-300`}>
                      <div className="hover:bg-gray-900 p-6 hover:rounded-lg hover:border hover:border-gray-800 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-orange-500 mb-3">{event.year}</h3>
                        <p className="text-white text-sm leading-relaxed">{event.title}</p>
                      </div>
                      
                      {/* Arrow pointing to timeline
                      <div className={`absolute left-1/2 transform -translate-x-1/2 ${
                        isTop ? '-bottom-2' : '-top-2'
                      }`}>
                        <div className={`w-0 h-0 ${
                          isTop 
                            ? 'border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800' 
                            : 'border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800'
                        }`}></div>
                      </div> */}
                    </div>
                    
                    {/* Timeline dot */}
                    {
                      index === secondEventList.length - 1 ? (
                        <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                      ) : (
                        <div className="flex">
                          <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                          <div className="w-6 h-6 bg-orange-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                        </div>
                      )
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
