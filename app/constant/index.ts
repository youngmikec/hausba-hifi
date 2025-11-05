
export interface IProjectDetail {
  title: string;
  description: string;
}
export interface IPortfolioProject {
  img: string;
  title: string;
  slug: string;
  location: string;
  projectStatus?: string;
  details?: IProjectDetail[]
}

export const PortfolioProjects: IPortfolioProject[] = [
  {
    img: "/images/dark-cinema-room-2.png",
    title: "XAMIRA HEIGHTS PROJECT",
    slug: "xamira-heights-project",
    location: "Ikoyi, Lagos",
    projectStatus: "ON-GOING",
  },
  {
    img: "/images/new-imgs/bourdilon4-project.png",
    title: "BOURDILON4 PROJECT",
    slug: "bourdilon4-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2022",
  },
  {
    img: "/images/new-imgs/alto-penthouse.png",
    title: "ALTO PENTHOUSE PROJECT",
    slug: "alto-penthouse-project",
    location: "Accra, Ghana",
    projectStatus: "COMPLETED 2018",
    details: [
      {
        title: "Key Challenge.",
        description: `This client wanted the best of everything in this architectural master piece. 
        From fully automated blinds for all glass walls, to the automation of the sliding doors. 
        A unique challenge was posed in the main bedroom with no walls to mount the TVs `
      },
      {
        title: "Our Solution.",
        description: `For the main bedroom we designed and installed 85 inch smart TV 
        screen in a custom built motorised TV Lift to drop from the ceiling when in use and return when not in-use. 
        This was coupled with a full-fledged Lutron Smart Lighting system to control all lighting and shades in the house. 
        We also deployed a dedicated home cinema with modern architectural star lighting.`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Audio System: Sonos
          Amplifiers: Apart Audio
          Shades: Somfy
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Vitrea
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/cuddle-project.png",
    title: "CUDDLE PROJECT",
    slug: "cuddle-project",
    location: "Ikoyi, Lagos",
    projectStatus: "ONGOING"
  },
  {
    img: "/images/new-imgs/osborne-towers.png",
    title: "OSBORNE TOWERS",
    slug: "osborne-towers",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2023",
  },
  {
    img: "/images/new-imgs/the-altona.png",
    title: "THE ALTONA",
    slug: "the-altona",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2023",
  },
  {
    img: "/images/new-imgs/bosphorus-project.png",
    title: "BOSPHORUS PROJECT",
    slug: "bosphorus-project",
    location: "Maitama, Abuja",
    projectStatus: "COMPLETED 2025",
  },
  {
    img: "/images/new-imgs/project-minnie-mouse.png",
    title: "PROJECT MINNIE MOUSE",
    slug: "project-minnie-mouse",
    location: "Ikoyi, Lagos",
    projectStatus: "ONGOING - 2026"
  },
  {
    img: "/images/new-imgs/luxury-apartment.png",
    title: "CONFIDENCE CARGO",
    slug: "confidence-cargo",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2023",
  },
  {
    img: "/images/new-imgs/thompson-project.png",
    title: "THOMPSON PROJECT",
    slug: "thompson-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2014",
    details: [
      {
        title: "Key Challenge.",
        description: `This client wanted the best of everything in this architectural master piece. 
        From fully automated blinds for all glass walls, to the automation of the sliding doors. 
        A unique challenge was posed in the main bedroom with no walls to mount the TVs  `
      },
      {
        title: "Our Solution.",
        description: `For the main bedroom we designed and installed 85 inch smart TV screen in a 
        custom built motorised TV Lift to drop from the ceiling when in use and return when not in-use. 
        This was coupled with a full-fledged Lutron Smart Lighting system to control all lighting and shades 
        in the house. We also deployed a dedicated home cinema with modern architectural star lighting.
`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Audio System: Sonos
          Amplifiers: Apart Audio
          Shades: Somfy
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Vitrea
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/bua-project.png",
    title: "BUA PROJECT",
    slug: "bua-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `This was a massive residence with a massive external landscape area and several 
        ancillary buildings that needed to be a part of the automation system.The client wanted a sophisticated, 
        yet reliable and functional system to accommodate a mix of both residential and official use.`
      },
      {
        title: "Our Solution.",
        description: `Firstly we designed a robust networking infrastructure to connect all ancillary 
        buildings to enable seamless integration of lighting, automation services across buildings. 
        But for the audio-visuals, a hybrid system was used to ensure optimum sound performance`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Amplifiers: Apart Audio
          Shades: Lutron
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Lutron
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/alexence-villa.png",
    title: "ALEXENCE VILLA",
    slug: "alexence-villa",
    location: "Guzape, Abuja",
    projectStatus: "COMPLETED 2024",
  },
  {
    img: "/images/new-imgs/asokoro-gardens.png",
    title: "ASOKORO GARDENS",
    slug: "asokoro-gardens",
    location: "Asokoro, Abuja",
    projectStatus: "ONGOING - COMPLETION 2026",
  },
  {
    img: "/images/new-imgs/usuma-villa.png",
    title: "USUMA VILLA",
    slug: "usuma-villa",
    location: "Ikoyi, Lagos",
    projectStatus: "ONGOING - COMPLETION 2025",
  },
  {
    img: "/images/new-imgs/dlm-automation.png",
    title: "DLM AUTOMATION",
    slug: "dlm-automation",
    location: "Ikoyi, Lagos",
    projectStatus: "ONGOING - COMPLETION 2025",
  },
  {
    img: "/images/new-imgs/probyn-project.png",
    title: "PROBYN PROJECT",
    slug: "probyn-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `The client wanted premium sound all around a massive home with two wings and a large outdoor space.`
      },
      {
        title: "Our Solution.",
        description: `Given the length and size of the development, we had to design and integrate two 
        32-zone Control4 audio systems for both wings into one central system. 
        This required designing and installing fibre network within the home robust enough to support a 
        seamless listening and control experience.`
      },
      {
        title: "Brands.",
        description: `Speakers: Sonance
          Audio System: Control4
          Amplifiers: Apart Audio
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/ss-maitama.png",
    title: "SS MAITAMA MANSION",
    slug: "ss-maitama-mansion",
    location: "Maitama, Abuja",
    projectStatus: "ONGOING - COMPLETION 2025",
  },
  {
    img: "/images/new-imgs/inupa-project.png",
    title: "INUPA PROJECT",
    slug: "inupa-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2018",
    details: [
      {
        title: "Key Challenge.",
        description: `This home was a modern masterpiece surrounded with several glass walls, 
        with the longest going from top to bottom of the house coming to about 10 metres. 
        The challenge was to cover everywhere with shades.`
      },
      {
        title: "Our Solution.",
        description: `We embarked on the largest motorised shading project in our company with this project. 
        We could use none other but Lutron. From manual shades for powder rooms to custom built 10 meter tall shades we
        designed an installed elegant motorised Lutron shading for every single window in this glass house. 
        It was indeed a master piece. From our success we went on to install the deliver and integrate the lighting, 
        automation and security system.
`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Audio System: Control4
          Amplifiers: Apart Audio
          Shades: Lutron
          Surveillance: Axis
          Access Control: 2N
          Lighting Control: Lutron
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/c94-project.png",
    title: "C94 PROJECT",
    slug: "c94-project",
    location: "Nicon Town, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `This client was a technology enthusiast who wanted the best of home technology in his new luxury home. For him, this was a lifestyle and every detail was given during our design thinking workshop. 
          The interior design also didn't want to see technology in the spaces.`
      },
      {
        title: "Our Solution.",
        description: `A Control4 smart home system provided a simple yet intuitive interface for the client. 
          Everything electrical and electronics was integrated from HVAC, lighting, Audio, Video, Security, Cameras, 
          Home Cinema, Window blind and even Voice control.

          We blended the Living room TV and Soundbar with the black marble wall cladding and buried 
          the powerful 15” S90i Wisdom audio subwoofer in the wall thereby taking all technology out of sight.`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
        Audio System: Sonos
        Amplifiers: Apart Audio
        Shades: Somfy
        Surveillance: Bosch
        Access Control: 2N
        Lighting Control: Vitrea
        Automation: Control4
        Video Distribution: Blustream
        Rack: Middle Atlantic
        Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/asokoro-mansion.png",
    title: "ASOKORO MANSION",
    slug: "asokoro-mansion",
    location: "Asokoro, Abuja",
    projectStatus: "ONGOING - COMPLETION 2025",
  },
  {
    img: "/images/new-imgs/gma-residence-project.png",
    title: "GMA RESIDENCE PROJECT",
    slug: "gma-residence-project",
    location: "Guzape, Abuja",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `In this modern home designed with modern lighting and a double height great room with glass walls, 
        the challenge was to deliver good sound with seamless control of lighting both natural and artificial.`
      },
      {
        title: "Our Solution.",
        description: `To deliver the lighting control for the modern 0-10v lighting fittings and the large motorised blinds, we utilised the full power of Lutron Homeworks QS & Sivoia QS shading system for  ultra-reliable and seamless control. 
        The great room featured the use of in-wall full range speakers to ensure good sound delivery in the double height space.`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Amplifiers: Apart Audio
          Shades: Lutron
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Lutron
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/akwa-ibom-residence.png",
    title: "AKWA-IBOM RESIDENCE",
    slug: "akwa-ibom-residence",
    location: "Akwa-Ibom, Uyo",
    projectStatus: "COMPLETED 2020",
    details: [
      {
        title: "Key Challenge.",
        description: `The client wanted a signature state of the art home for his country home in Akwa Ibom. 
        With no dedicated room for a home cinema, the challenge was to achieve 
        and immersive cinematic experience in his living room without distorting his interior design`
      },
      {
        title: "Our Solution.",
        description: `To deliver this challenge, our design theme was ultra-high efficiency, with minimal footprint. 
        This could only be achieve with the super efficient Wisdom Audio speakers that could disappear into the room interior. The required large 4k display was achieved with the massive Barco projector concealed in a custom built projector lift and project screen.
`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Wisdom Audio
          Amplifiers: Wisdom Audio
          Screen: Screen Innovation
          Projection: Barco
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul
          Surveillance: Axis
          Outdoor Screen: Videotree`
      },
    ]
  },
  {
    img: "/images/new-imgs/villa-anderson-project.png",
    title: "VILLA ANDERSON PROJECT",
    slug: "villa-anderson-project",
    location: "Yenagoa, Bayelsa",
    projectStatus: "COMPLETED 2020",
    details: [
      {
        title: "Key Challenge.",
        description: `The fact that the house was a country home in Yenagoa meant that the system had to be robust but simple and reliable. 
        The client was a music lover and wanted great sound all round his home especially in his large swimming pool and outdoor garden area.`
      },
      {
        title: "Our Solution.",
        description: `“We distributed audio through eight zones, indoor and outdoor using Control4´s audio distribution systems,
         which allow the users to listen to different sources in different rooms simultaneously. Sonance 
         Landscape Series speakers were used for the pool area. 
        For security and surveillance we used DSC and Bosch system integrated to the 
        Control4 for a seamless control experience.`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Audio System: Control4
          Amplifiers: Apart Audio
          Shades: Lutron
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Lutron
          Automation: Control4
          Video Distribution: Blustream
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/villa-ena-project.png",
    title: "VILLA ENA PROJECT",
    slug: "villa-ena-project",
    location: "Maitama, Abuja",
    projectStatus: "COMPLETED 2020",
    details: [
      {
        title: "Key Challenge.",
        description: `This client was a technology enthusiast who wanted the best of home technology in his new luxury home. 
        For him, this was a lifestyle and every detail was given during our design thinking workshop. 
        The interior design also didn't want to see technology in the spaces.`
      },
      {
        title: "Our Solution.",
        description: `A Control4 smart home system provided a simple yet intuitive interface for the client. 
        Everything electrical and electronics was integrated from HVAC, lighting, Audio, Video, Security, Cameras, Home Cinema, Window blind and even Voice control.
        The client never carries keys so fingerprint keyless entry is a lifestyle for him.`
      },
      {
        title: "Brands.",
        description: `Speakers: Origin Acoustics
          Audio System: Control4
          Amplifiers: Apart Audio
          Surveillance: Bosch
          Access Control: 2N
          Lighting Control: Lutron
          Automation: Control4
          Video Distribution: Blustream
          Lifts: Future Automation
          Smart Mirror Displays: Seura 
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/hausba-lagos-cinema.png",
    title: "HAUSBA LAGOS CINEMA",
    slug: "hausba-lagos-cinema",
    location: "Lekki, Lagos",
    projectStatus: "COMPLETED 2022",
    details: [
      {
        title: "Key Challenge.",
        description: `This was our showroom. 
        The challenge was to show our potential client a glimpse of what they will experience in their homes.`
      },
      {
        title: "Our Solution.",
        description: `We designed a 7.2.4 Dolby Atmos speaker system, with the surround sound 
        and rear speakers hidden in a minimalist acoustics wall panelling and the two subwoofers 
        were placed behind the 160-inch acoustically transparent screen. 
        The projection system was Sony 4K projector.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/aso-villa-cinema.png",
    title: "ASO VILLA CINEMA",
    slug: "aso-villa-cinema",
    location: "Abuja",
    projectStatus: "ONGOING",
    details: [
      {
        title: "Key Challenge.",
        description: `This was our showroom. 
        The challenge was to show our potential client a glimpse of what they will experience in their homes.`
      },
      {
        title: "Our Solution.",
        description: `We designed a 7.2.4 Dolby Atmos speaker system, 
        with the surround sound and rear speakers hidden in a minimalist acoustics wall panelling 
        and the two subwoofers were placed behind the 160-inch acoustically transparent screen. 
        The projection system was Sony 4K projector.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/usuma-villa-cinema.png",
    title: "USUMA VILLA CINEMA",
    slug: "usuma-villa-cinema",
    location: "Abuja",
    projectStatus: "ONGOING",
    details: [
      {
        title: "Key Challenge.",
        description: `This was our showroom. The challenge was to show our potential 
        client a glimpse of what they will experience in their homes.`
      },
      {
        title: "Our Solution.",
        description: `We designed a 7.2.4 Dolby Atmos speaker system, 
        with the surround sound and rear speakers hidden in a minimalist acoustics wall panelling 
        and the two subwoofers were placed behind the 160-inch acoustically transparent screen. 
        The projection system was Sony 4K projector.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/falala-cinema.png",
    title: "FALALA CINEMA",
    slug: "falala-cinema",
    location: "Maitama, Abuja",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `A existing homeowner wanted to have the best possible Home Cinema 
        experience out there with zero compromise. Our first challenge was to identify a room 
        with the required size to accommodate 10 people. 
        This room also had to be totally soundproof since it was adjacent to the kids bedroom.`
      },
      {
        title: "Our Solution.",
        description: `Firstly, we design and installed a room-in-room acoustic solution 
        in this 60sqm dedicated cinema. 
        The large 193” vertical masking screen from Screen Innovation projected 
        4K UHD movies through a Barco Balden Laser projector. 
        Wisdom Audio Line source speakers delivered breath-taking sound 
        with a Trinnov 9.4.4 Dolby Atmos immersive audio configuration.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Wisdom Audio
          Amplifiers: Wisdom Audio
          Screen: Screen Innovation
          Projection: Barco
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/bua-cinema.png",
    title: "BUA CINEMA",
    slug: "bua-cinema",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `This room needed to have a minimum of 10 seats with a 
        minimalist finish as simple put by the client. 
        The room was an envelop with external windows prone to noise from the main driveway.`
      },
      {
        title: "Our Solution.",
        description: `We reduced the room depth with a rack room at the back of the room. 
        We also soundproofed the entire room with a room-in-room acoustic design. 
        The final configuration was a Trinnov 9.4.4 Dolby Atmos immersive sound system. The Kaleidescape 
        movie server playback 4K UHD movies onto a 160” Cinemascope projector screen from Screen Innovation.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Sonodyne
          Amplifiers: Sonodyne
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/probyn-cinema-project.png",
    title: "PROBYN CINEMA PROJECT",
    slug: "probyn-cinema-project",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `On occasion, a homeowner knows what they want: the image, 
        sound and ambience of a truly great movie experience. 
        After several in-depth meetings, we were asked to come up with something exceptional.`
      },
      {
        title: "Our Solution.",
        description: `And we did just that, deliverying a 9.4.4 Dolby 
        Atmos sytem that deliers reference-quality sound while being completely hidden from view. 
        A Sony 4K Projector delivers a brilliant image to 160-inch Cinemascope screen. 
        With integrated custom user interface and a minimalist linear lighting design 
        to deliver a seamless user experience and ambience.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/palm-spring-e25-cinema.png",
    title: "PALM SPRING E25 CINEMA",
    slug: "palm-spring-e25-cinema",
    location: "Maitama, Abuja",
    projectStatus: "COMPLETED 2017",
    details: [
      {
        title: "Key Challenge.",
        description: `A existing homeowner wanted to have the best possible Home 
        Cinema experience out there with zero compromise. Our first challenge was to 
        identify a room with the required size to accommodate 10 people. 
        This room also had to be totally soundproof since it was adjacent to the kids bedroom.`
      },
      {
        title: "Our Solution.",
        description: `Firstly, we design and installed a room-in-room acoustic solution 
        in this 60sqm dedicated cinema. The large 120” vertical masking screen from Screen 
        Innovation projected 4K UHD movies through a Sony. 
        Sonance point source speakers delivered breath-taking sound with a Integra 
        7.2.4 Dolby Atmos immersive audio configuration. `
      },
      {
        title: "Brands.",
        description: `Processor: Integra
          Speakers: Sonance
          Amplifiers: Apart Audio
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/alexence-cinema.png",
    title: "ALEXENCE CINEMA",
    slug: "alexence-cinema",
    location: "Asokoro, Abuja",
    projectStatus: "COMPLETED 2024",
    details: [
      {
        title: "Key Challenge.",
        description: `This was our showroom. 
        The challenge was to show our potential client a glimpse of what they will experience in their homes.`
      },
      {
        title: "Our Solution.",
        description: `We designed a 7.2.4 Dolby Atmos speaker system, 
        with the surround sound and rear speakers hidden in a minimalist acoustics wall panelling and 
        the two subwoofers were placed behind the 160-inch acoustically transparent screen. 
        The projection system was Sony 4K projector.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/segun-cinema.png",
    title: "SEGUN CINEMA",
    slug: "segun-cinema",
    location: "Lagos",
    projectStatus: "COMPLETED 2024",
    details: [
      {
        title: "Key Challenge.",
        description: `This was our showroom. 
        The challenge was to show our potential client a glimpse of what they will experience in their homes.`
      },
      {
        title: "Our Solution.",
        description: `We designed a 7.2.4 Dolby Atmos speaker system, 
        with the surround sound and rear speakers hidden in a minimalist acoustics wall panelling 
        and the two subwoofers were placed behind the 160-inch acoustically transparent screen. 
        The projection system was Sony 4K projector.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/c94-cinema-project.png",
    title: "C94 CINEMA PROJECT",
    slug: "c94-cinema-project",
    location: "Nicon Town, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `The challenge here was simple. Delight an audiophile. 
        The Client wanted the best home cinema technology with a bold yet minimalist interior finish.`
      },
      {
        title: "Our Solution.",
        description: `Our start for this room was with the interior design. 
        The theme was the Range Rover experience.Black and grey with linear Cool white LED profiles. 
        fifteen(15) Bowers&Wilkins speakers in a 9.2.4 Dolby Atmos Configuration where driven by a Trinnov AL16. 
        The Sony 4K Projector was concealed behind a projector port in a dedicated projector room behind the room.`
      },
      {
        title: "Brands.",
        description: `Processor: Trinnov
          Speakers: Bowers & Wilkens
          Amplifiers: Rotel
          Screen: Screen Innovation
          Projection: Sony
          Lighting Control: Lutron
          Automation: Control4
          Media Player: Kaleidescape
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/microsoft-lagos-office.png",
    title: "MICROSOFT LAGOS OFFICE",
    slug: "microsoft-lagos-office",
    location: "Lagos, Nigeria",
    projectStatus: "COMPLETED 2021",
    details: [
      {
        title: "Key Challenge.",
        description: `This internationally renowned client could only afford to have the 
        best smart lighting system in the world installed their new office. `
      },
      {
        title: "Our Solution.",
        description: `For the first time, we installed the most advanced commercial smart 
        lighting system - Lutron Quantum System to meet the pre-defined technical specifications 
        of the project.`
      },
      {
        title: "Brands.",
        description: `Lighting Control: Lutron`
      },
    ]
  },
  {
    img: "/images/new-imgs/mtn-5g-experience-center.png",
    title: "MTN 5G EXPERIENCE CENTER",
    slug: "mtn-5g-experience-center",
    location: "Maitama, Abuja",
    projectStatus: "COMPLETED 2024",
  },
  {
    img: "/images/gt-bank.png",
    title: "GT Bank Auditorium",
    slug: "gt-bank-auditorium",
    location: "Abeokuta, Ogun State",
    projectStatus: "COMPLETED 2021",
    details: [
      {
        title: "Key Challenge.",
        description: `The client wanted to make a statement, and standout from competition. 
        We were charged to deliver a modern training facility that will incorporate recent technology 
        trends while providing support for legacy technology.`
      },
      {
        title: "Our Solution.",
        description: `A fully integrated Crestron Unified Communications system with 
        full Audio Visual design for the large auditorium to ensure speech intelligibility for all participants. 
        We deployed the first crowd mic solution in Nigeria to allow training participants make contributions using 
        their mobile devices.`
      },
      {
        title: "Brands.",
        description: `AV Processor: Crestron
          Video Conferencing: Yealink
          Speakers: Apart Audio
          Amplifiers: Apart Audio
          Projection Screen: Screenline
          Video Wall: Samsung
          Projection: Sony
          Lighting Control: Crestron
          Automation: Crestron
          Crowd Mics: Biamp
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/mar-and-mor-head-office.png",
    title: "MAR & MOR HEAD OFFICE ",
    slug: "mar-and-mor-head-office",
    location: "Lagos, Nigeria",
    projectStatus: "COMPLETED 2022",
  },
  {
    img: "/images/new-imgs/uac-group-head-office.png",
    title: "UAC GROUP HEAD OFFICE",
    slug: "uac-group-head-office",
    location: "Lagos Island, Lagos",
    projectStatus: "COMPLETED 2021"
  },
  {
    img: "/images/new-imgs/lambert-electromec-boardroom.png",
    title: "LAMBERT ELECTROMEC BOARDROOM ",
    slug: "lambert-electromec-boardroom",
    location: "Lagos, Nigeria",
    projectStatus: "COMPLETED 2023",
  },
  {
    img: "/images/new-imgs/heritage-place-boardroom.png",
    title: "HERITAGE PLACE BOARDROOM",
    slug: "heritage-place-boardroom",
    location: "Lagos",
    projectStatus: "COMPLETED 2020",
    details: [
      {
        title: "Key Challenge.",
        description: `The facility was an office building used by several businesses with a
        shared set of collapsable meeting room. 
        The challenge was to make the meeting rooms operate independently and collectively.`
      },
      {
        title: "Our Solution.",
        description: `We deployed a flexible wireless video conferencing system that could be 
        merged into one central system when all rooms are collapsed.`
      },
      {
        title: "Brands.",
        description: `Conferencing: Yealink
          Speakers: Apart Audio
          Display: OFE
          Projection: NA
          Automation: Control4
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/coronation-bank.png",
    title: "CORONATION BANK",
    slug: "coronation-bank",
    location: "Ikoyi, Lagos",
    projectStatus: "COMPLETED 2020",
    details: [
      {
        title: "Key Challenge.",
        description: `The client wanted an office wide video distribution system with a state 
        of the art conferencing and training room facility in their pent floor training rooms.
        Where to merge 3 training rooms to dynamically operate as one.`
      },
      {
        title: "Our Solution.",
        description: `We implemented full meeting room projection and conferencing system for the 3 meeting rooms. 
        Then using advanced AV automation, connected the sound and visuals of all three rooms into one central AV matrix system. 
        The automation system detects when the rooms are collapsed and switches to one central system.`
      },
      {
        title: "Brands.",
        description: `AV Processor: Extron
          Speakers: Apart Audio
          Amplifiers: Apart Audio
          Screen: Screenline
          Projection: Optoma
          Automation: Extron
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/softcom-head-office.png",
    title: "SOFTCOM HEAD OFFICE",
    slug: "softcom-head-office",
    location: "Ikeja, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `A trendy tech company in Softcom wanted a modern office space that will inspire innovation in employees.`
      },
      {
        title: "Our Solution.",
        description: `Full smart lighting and smart audio system was deployed to have music playing 
        around the office with Vitrea smart lighting system to enable efficient management and control 
        of office lighting.`
      },
      {
        title: "Brands.",
        description: `
          Speakers: Origin Acoustics
          Amplifiers: Sonos
          Lighting Control: Vitrea
          Automation: Control4
          Surveillance: Alarm.com
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/sencillo-beach-house.png",
    title: "SENCILLO BEACH HOUSE",
    slug: "sencillo-beach-house",
    location: "Ilashe, Lagos",
    projectStatus: "COMPLETED 2019",
    details: [
      {
        title: "Key Challenge.",
        description: `This beach house was designed to become a prime destination in 
        Lagos to deliver and escape, out of this world experience for guests. 
        The sound had to match the luxury experience and exquisite architecture. `
      },
      {
        title: "Our Solution.",
        description: `We delivered landscape speakers for the beach pool area to blend with 
        the beach side feel while achieving the required power to accomodate any beach side events. `
      },
      {
        title: "Brands.",
        description: `
          Speakers: Sonance
          Audio System: Sonos 
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/uac-group-head-office-2.png",
    title: "UAC GROUP HEAD OFFICE",
    slug: "uac-group-head-office-2",
    location: "Lagos Island, Lagos",
    projectStatus: "COMPLETED 2021",
    details: [
      {
        title: "Key Challenge.",
        description: `Client wanted a state of the art boardroom along side some smaller meeting 
        rooms in their all-new office building`
      },
      {
        title: "Our Solution.",
        description: `Crestron had to be the solution. Using Crestron's Flex Unified Conferencing system, 
        we integrated and deployed the 20 seater boardroom with mics speech enhancement`
      },
      {
        title: "Brands.",
        description: `Video Conferencing: Crestron
          AV Processor: Crestron
          Speakers: Crestron
          Amplifiers: Crestron
          Screen: Samsung
          Projection: NA
          Lighting Control: Crestron
          Automation: Crestron
          Rack: Middle Atlantic
          Network: Luxul`
      },
    ]
  },
  {
    img: "/images/new-imgs/hausba-lagos-experience-center.png",
    title: "HAUSBA LAGOS EXPERIENCE CENTER",
    slug: "hausba-lagos-experience-center",
    location: "Lekki, Lagos",
    projectStatus: "COMPLETED 2021",
  },
];