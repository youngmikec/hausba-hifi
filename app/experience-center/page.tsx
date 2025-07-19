import Image from "next/image";
import Banner from "../components/app/Banner"
import HomeLayout from "../components/layouts/home-layout"
import Link from "next/link";


const ExperienceCenter = () => {
  const gallery = [
    {
      img: "/images/dark-cinema-room-2.png",
      title: "Home Cinema Room"
    },
    {
      img: "/images/stereo-room.png",
      title: "HiFi Room"
    },
    {
      img: "/images/outside-lounge-room.png",
      title: "Outdoor Lounge"
    },
    {
      img: "/images/office-room.png",
      title: "Sonos Lounge"
    },
  ]

  return (
    <HomeLayout>
      <Banner bgImg={"/images/experience-room.png"} />

      <div className='w-11/12 mx-auto md:w-9/12 mt-20 mb-40'>
        <div className="border-l-[1px] border-black px-10 py-8 mb-12">
          <p className="text-2xl md:text-4xl font-bold text-black font-montserrat my-4">seeing is believing</p>
          <p className="text-[13px] md:text-[14px] text-black font-montserrat mt-2 mb-4 w-full md:w-6/12">
            Delight your guests from the moment they enter. 
            With <span className="font-semibold">HAUSBA’s</span> Guest Room Management System, lighting, 
            climate, entertainment, and privacy settings adjust automatically 
            to their presence and preferences all accessible via sleek touch panels. 
          </p>
          <Link href="/experience-center/gallery" className="flex justify-start items-center gap-4 text-center text-[13px] md:text-[14px] text-primary font-montserrat my-2">
            <span>get a quote</span>
            <Image src="/images/arrow-right.png" alt="arrow-right" width={20} height={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 p-4 px-0">
          {
            gallery.map((item: any, idx: number) => (
              <div className={`${idx % 2 === 1 ? "-my-32 -sm:mt-28" : ""}`} key={idx}>
                <Image 
                  src={item.img}
                  alt="Home Cinema Room"
                  className="object-contain"
                  width={450}
                  height={900}
                />
                <p className="-mt-4 z-50 ml-8 pl-4 min-h-[100px] flex justify-start items-center border-l-[1px] border-black font-semibold">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>


    </HomeLayout>
  )
}

export default ExperienceCenter;