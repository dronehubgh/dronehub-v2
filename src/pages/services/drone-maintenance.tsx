import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';
import {
  Details,
  OurApproach,
  Overview,
  Programs,
} from '../../features/services/drone-maintenance';

const DroneMaintenance: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Maintenance & Technical Support"
        description="Top-level maintenance to keep your drone airworthy"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-23_sq5q1s.png"
        cta={
          <CustomMenuButton
            title="Book now"
            bgColor="white"
            color="brand.blue"
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />

      <Details />
      <Overview />
      <Programs />
      <OurApproach />
      <ConnectWithUs description="Schedule a maintenance session for your drone products today." />
    </>
  );
};

export default DroneMaintenance;
