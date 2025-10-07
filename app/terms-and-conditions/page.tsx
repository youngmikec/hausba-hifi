"use client";

import React from 'react';
import HomeLayout from '../components/layouts/home-layout';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="text-lg md:text-xl font-semibold mb-6 text-black font-montserrat">{title}</h2>
    <div className="text-gray text-sm space-y-2 font-montserrat">
      {children}
    </div>
  </section>
);

const TermsAndConditionsPage = () => {
  return (
    <HomeLayout>
      <div className="w-11/12 md:w-10/12 mx-auto p-6 mt-10">
      <h1 className="text-5xl mb-20 font-montserrat text-black">Proposal Terms & Conditions</h1>

      <Section title="Client Responsibilities">
        <ul className="list-disc list-inside space-y-3 font-montserrat">
          <li>Client shall provide regulated power supply onsite for HAUSBA to power work tools and equipment during the site&lsquo;s approved working hours.</li>
          <li>Client shall provide manned crane or scaffold for HAUSBA upon request upon establishment on its necessity for the accomplishment of project task.</li>
          <li>Client shall be responsible for all structural openings through walls, floors, ceilings and landscape. Client shall provide secure storage for all supplied project materials throughout the project lifecycle.</li>
          <li>Client shall provide physical security onsite to ensure material and human resources remain secure onsite.</li>
          <li>Client would be responsible for the provision of neutral wiring for all Smart Lighting projects. The site must pass the ground loop test before the commencement of a project. If otherwise, client should be responsible for providing a solution.</li>
          <li>Upon practical completion of the project and partial handover sign off, a 3 months defect liability period shall commence. During this period, Client shall get FREE support and system training in line with project functional specification documentation.</li>
          <li>Any faulty equipment not resulting from mis-use or mishandling, physical damage, or force-majeure shall be replaced without cost.</li>
        </ul>
      </Section>

      <Section title="Project Preliminaries">
        <p>The preliminaries on this project covers for a project duration of 1 Year. A preliminaries cost which will be determined on a case-by-case basis per month will be applicable should the project exceed 1 year. This shall account for all on-site attendance, travel, accommodation of logistics required for the delivery of the project.</p>
      </Section>

      <Section title="General Payment Terms">
        <p>All payments will be made in the currency stated on the proposal estimate or the equivalent with exchange rate approved by HAUSBA Finance. The pricing on this offer was made based in USD and will be presented in NAIRA at the point of payment using the prevailing open market exchange rate approved by HAUSBA Finance.</p>
      </Section>
    </div>
    </HomeLayout>
  );
};

export default TermsAndConditionsPage;