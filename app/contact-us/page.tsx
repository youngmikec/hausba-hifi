import Image from 'next/image';
import ContactForm from '../components/Form/ContactUsForm';
import HomeLayout from '../components/layouts/home-layout';

const ContactPage = () => {
  return (
    <HomeLayout>
      <div className="bg-white">
        {/* Header Image Section */}
        <div className="relative w-full h-[60vh]">
          <Image
            src="/images/contact-us.png" // Replace with actual path
            alt="Contact Header"
            fill
            objectFit='cover'
            objectPosition='center'
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          </div>
        </div>

        
        <div className="bg-[#D5D5D5] px-4 py-10 sm:px-8 md:px-16">
          <div className="">
            <p className="mb-6 text-gray font-montserrat">
              Thank you for your interest in Houzba. For inquiries, provide your information below.
            </p>
            <p className="font-semibold font-montserrat">Head Office:</p>
            <p className="mb-6 font-semibold font-montserrat">For Assistance:</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-10 pt-10 pb-20 w-full md:w-9/12">
          <ContactForm />
        </div>
      </div>
    </HomeLayout>
  );
}

export default ContactPage;
