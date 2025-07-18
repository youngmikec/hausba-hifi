import Image from 'next/image';
import HomeLayout from '../components/layouts/home-layout';

const AboutUsPage = () => {
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
            <p className="text-4xl md:text-5xl w-full md:w-7/12 font-bold font-montserrat text-gray-light mb-12 text-center">Our Core Values</p>
            <p className="text-center text-gray-light font-montserrat">Our values shapes the culture of our organization and define the character of our company.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="bg-gray px-6 py-6 rounded-md">
                <p className="text-center font-montserrat">Leadership</p>
                <p className="text-center font-montserrat">We become the best, to build the rest.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section
        <div className="px-10 pt-10 pb-20 w-full md:w-9/12">
          <ContactForm />
        </div> */}
      </div>
    </HomeLayout>
  );
}

export default AboutUsPage;
