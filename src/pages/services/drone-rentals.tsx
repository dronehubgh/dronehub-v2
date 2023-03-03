import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ServiceHeroBanner } from '../../features';

const DroneRentals: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Rental Services"
        description="Let’s help you get your drone flying againAccess more options to harness the potential of drones for your project."
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677592760/donehub-assets/services/Group_jpiw3a.png"
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

export default DroneRentals;
