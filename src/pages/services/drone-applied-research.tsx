import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';
import {
  AreasWeSupport,
  Details,
  WhoWeWorkWith,
  WhyWorkWithUs,
} from '../../features/services/drone-applied-research';

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
      <Details />
      <AreasWeSupport />
      <WhyWorkWithUs />
      <WhoWeWorkWith />
      <ConnectWithUs description="Do you have an upcoming research project? Send us a message, we’d be happy to help. " />
    </>
  );
};

export default DroneAppliedResearch;
