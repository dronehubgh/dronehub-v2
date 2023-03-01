import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const DroneAppliedResearch: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Applied  Research Services"
        description="Get accurate research results with drones"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-29_dcrmh6.png"
        btnLabel="Send a Request"
      />
    </>
  );
};

export default DroneAppliedResearch;
