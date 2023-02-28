import { Box } from '@chakra-ui/react';
import React from 'react';
import { AllServices, OurMission, ServicesHomeBanner } from '../../features';

const ServicesHomePage = () => {
  return (
    <>
      <ServicesHomeBanner />
      <OurMission />
      <AllServices />
    </>
  );
};

export default ServicesHomePage;
