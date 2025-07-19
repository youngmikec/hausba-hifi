import Image from "next/image";
import HomeLayout from "../components/layouts/home-layout"


const PortfolioPage = () => {
  const gallery = [
    {
      img: "/images/dark-cinema-room-2.png",
      title: "Lake Chad Cinema",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/red-seat-room.png",
      title: "Lake Chad Cinema",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/coronation-house.png",
      title: "Coronation Bank",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/red-seat-cinema.png",
      title: "Hausba Lagos Cinema",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/big-screen-cinema-room.png",
      title: "Sencillio Beach House",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/microsoft-office.png",
      title: "Microsoft Lagos Office",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/office-lounge.png",
      title: "UAC Group",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/office-space.png",
      title: "Softcom Head Office",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/gt-bank.png",
      title: "GT Bank Auditorium",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/grilled-house.png",
      title: "Heritage Place Boardroom",
      location: "Lagos, Nigeria",
    },
    {
      img: "/images/black-seat-cinema.png",
      title: "BUA Cinema",
      location: "Lagos, Nigeria",
    },
    
  ];


  return (
    <HomeLayout>
      <div className='w-11/12 mx-auto md:w-9/12 mt-20 mb-40'>
        <div className="border-l-[1px] border-black px-10 py-8 mb-12">
          <p className="text-2xl md:text-4xl font-bold text-black font-montserrat my-4">seeing is believing</p>
          <p className="text-[13px] md:text-[14px] text-black font-montserrat mt-2 mb-4 w-full md:w-6/12">
            Delight your guests from the moment they enter. 
            With <span className="font-semibold">HAUSBA’s</span> Guest Room Management System, lighting, 
            climate, entertainment, and privacy settings adjust automatically 
            to their presence and preferences all accessible via sleek touch panels. 
          </p>
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
                <div className="-mt-4 z-50 ml-8 pl-4 py-6 min-h-[100px] flex flex-col gap-2 border-l-[1px] border-black ">
                  <p className="font-semibold font-montserrat text-black text-xl mt-2">{item.title}</p>
                  <p className="font-montserrat">{item.title}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </HomeLayout>
  )
}

export default PortfolioPage;