import Image from "next/image";
import Banner from "../components/app/Banner"
import HomeLayout from "../components/layouts/home-layout"
import Link from "next/link";


const ExperienceCenter = () => {
  return (
    <HomeLayout>
      <Banner bgImg={"/images/default-banner.png"} />

      <div className="border-l-[1px] border-black px-10 pt-4 pb-8">
        <p className="text-center text-[12px] md:text-[16px] text-black font-montserrat my-2">seeing is believing</p>
        <p className="text-center text-[13px] md:text-[14px] text-black font-montserrat my-2">
          Delight your guests from the moment they enter. 
          With HAUSBA’s Guest Room Management System, lighting, 
          climate, entertainment, and privacy settings adjust automatically 
          to their presence and preferences all accessible via sleek touch panels. 
        </p>
        <Link href="/quote" className="flex justify-start items-center gap-4 text-center text-[13px] md:text-[14px] text-primary font-montserrat my-2">
          <span>get a quote</span>
          <Image src="/images/arrow-right.png" alt="arrow-right" width={20} height={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 p-4 px-32">
          <div className="">
            <Image 
              src="/images/Hero-1.png"
              alt="Home Cinema Room"
              className="object-contain"
              width={450}
              height={600}
            />
            <p className="mt-2 pl-4 border-l-2 border-black font-semibold">Home Cinema Room</p>
          </div>

          <div className="-my-40 -sm:mt-28">
            <Image 
              src="/images/Hero-1.png"
              alt="Home Cinema Room"
              className="object-contain"
              width={450}
              height={600}  
            />
            <p className="mt-2 pl-4 border-l-2 border-black font-semibold">HiFi Room</p>
          </div>

          <div className="">
            <Image 
              src="/images/Hero-1.png"
              alt="Home Cinema Room"
              className="object-contain"
              width={450}
              height={600}
            />
            <p className="mt-2 pl-4 border-l-2 border-black font-semibold">Outdoor Lounge</p>
          </div>

          <div className="-my-40 -sm:mt-28">
            <Image 
              src="/images/Hero-1.png"
              alt="Home Cinema Room"
              className="object-contain"
              width={450}
              height={600}
            />
            <p className="mt-2 pl-4 border-l-2 border-black font-semibold">Sonos Lounge</p>
          </div>
        </div>

    </HomeLayout>
  )
}

export default ExperienceCenter;