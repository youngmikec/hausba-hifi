import HomeLayout from "@/app/components/layouts/home-layout";


const ExperienceCenterGallery = () => {
  return (
    <HomeLayout>
      <div className="w-11/12 md:w-9/12 mx-auto">

        <div className="flex flex-col gap-8 mt-20 mb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <div className="bg-[#D9D9D9] min-h-[400px]"></div>
            <div className="bg-[#D9D9D9] min-h-[400px]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
            <div className="bg-[#D9D9D9] min-h-[300px]"></div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default ExperienceCenterGallery;