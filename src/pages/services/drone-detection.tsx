import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ServiceHeroBanner } from '../../features';

const DroneDetection: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Detection Solution"
        description="Protect your airspace"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677593036/donehub-assets/services/Group_16512_iaqmnk.png"
        cta={
          <CustomMenuButton
            title="Send a request"
            bgColor="white"
            color="brand.blue"
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />
    </>
  );
};

export default DroneDetection;
