import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ServiceHeroBanner } from '../../features';

const DroneAppliedResearch: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Applied  Research Services"
        description="Get accurate research results with drones"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-29_dcrmh6.png"
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

export default DroneAppliedResearch;
