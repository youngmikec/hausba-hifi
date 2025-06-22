"use client";

import ContactForm from '../components/app/ContactForm';
import HomeLayout from '../components/layouts/home-layout';
import { FC } from 'react';

const Commercial: FC = () => {
  return (
    <HomeLayout>
        <ContactForm />
    </HomeLayout>
  );
}

export default Commercial;