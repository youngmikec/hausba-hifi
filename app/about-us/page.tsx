import Image from 'next/image';
import HomeLayout from '../components/layouts/home-layout';
import Timeline from '../components/app/TimelineComponent';

const AboutUsPage = () => {
  const coreValues = [
    {
      title: "LEADERSHIP",
      description: "We believe in transparency, honesty, and trust.",
      bgColor: "#FFF2E6"
    },
    {
      title: "EXECLENCE",
      description: "We go above and beyond.",
      bgColor: "#D5D5D5"
    },
    {
      title: "CARE",
      description: "We show empathy and reward others",
      bgColor: "#FFD5B0"
    },
    {
      title: "THINK SYSTEM",
      description: "We solve tomorrow's problems today.",
      bgColor: "#AFAFAF"
    },
  ]
  return (
    <HomeLayout>
      <div className="bg-white">
        {/* Header Image Section */}
        <div className="relative w-full h-[60vh]">
          <Image
            src="/images/about-us.png" // Replace with actual path
            alt="About Us Header"
            fill
            objectFit='cover'
            objectPosition='center'
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>

        
        <div className="px-4 py-20 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-4xl md:text-5xl w-full md:w-7/12 font-bold font-montserrat text-gray-light mb-12">How we work with our Clients.</p>

              <div>
                <button
                  type="submit"
                  className="bg-primary hover:border-[1px] border-gray-lightest-primary text-white py-2 px-6 rounded-full font-normal font-montserrat"
                >
                  About Us
                </button>
              </div>
            </div>
            <div>
              <div className="w-full md:w-8/12 text-gray-light text-lg md:text-xl flex flex-col gap-6 md:gap-4">
                <p className="font-montserrat">
                  At HAUSBA, we specialize in smart system integration for modern living.
                </p>
                <p className="font-montserrat">
                  As demand grows for intelligent, secure, and comfortable homes, we deliver practical, efficient, and user-friendly solutions that enhance everyday life. 
                </p>
                <p className="font-montserrat">
                  If you want it done right the first time, let’s talk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-20 md:px-16">
          <div className="mb-4">
            <p className="text-3xl md:text-4xl w-full md:w-7/12 mx-auto font-bold font-montserrat text-gray-light mb-6 text-center">Our Core Values</p>
            <p className="text-center text-gray-light font-montserrat mx-auto w-full md:w-6/12">Our values shapes the culture of our organization and <br/> define the character of our company.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-20">
            {
              coreValues.map((value, index) => (
                <div key={index}>
                  <div className={`px-6 py-8 rounded-md flex flex-col min-h-[200px] items-center justify-center`} style={{backgroundColor: value.bgColor}}>
                    <p className="text-center font-montserrat text-2xl font-semibold mb-4">{value.title}</p>
                    <p className="text-center font-montserrat mx-auto w-7/12">{value.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Why Choose Us */}
        <div className='w-11/12 mx-auto md:w-11/12 my-32'>
          <div className="px-10 py-6 w-full min-h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="h-full flex justify-center items-center">
                    <div className="flex-col gap-4">
                        <p className="text-left text-[24px] md:text-[38px] font-bold text-black font-montserrat my-2">Why Choose Us</p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          At HAUSBA, we take an integrated design approach that considers a space’s dimensions, acoustics, and interior aesthetics to deliver seamless, high-performance system integrations. 
                        </p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          Our end-to-end project delivery covers everything from design and planning to installation, equipment programming, and ongoing technical support—making us your one-stop solution. 
                          With an award-winning team recognized by D-Tools and certified by CEDIA and AVIXA, we uphold global industry standards. 
                        </p>
                        <p className="w-full md:w-8/12 text-left text-[16px] md:text-[16px] text-black font-montserrat my-2">
                          Backed by a dedicated support team, we work closely with homeowners and professionals to ensure every solution is as functional as it is visually refined. 
                        </p>
                    </div>
                </div>
                <div 
                  className="relative" 
                  style={{ 
                    minHeight: "600px",
                    maxHeight: "600px"
                  }}
                >
                  <Image
                    src={"/images/Hausba-black-seat.png"}
                    alt="black seat"
                    fill
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us */}

        <div className="my-20">
          <Timeline />
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUsPage;
