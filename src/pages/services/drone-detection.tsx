import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const DroneDetection: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Detection Solution"
        description="Protect your airspace"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677593036/donehub-assets/services/Group_16512_iaqmnk.png"
        btnLabel="Send a Request"
      />
    </>
  );
};

export default DroneDetection;
