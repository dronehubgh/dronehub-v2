import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const DroneConsulting: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Consulting Services"
        description="Helping you succeed in your drone program"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-2_rvfqw8.png"
        btnLabel="Book now"
      />
    </>
  );
};

export default DroneConsulting;
