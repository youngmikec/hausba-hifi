"use client";

import Banner from '../components/app/Banner';
import ContactForm from '../components/app/ContactForm';
import HomeLayout from '../components/layouts/home-layout';
import { FC } from 'react';

const Hospitality: FC = () => {
  return (
    <HomeLayout>
        <Banner bgImg={"/images/hospitality-banner.png"} />
        <ContactForm />
    </HomeLayout>
  );
}

export default Hospitality;