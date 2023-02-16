import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { OurServices, Solutions } from '../components';
import {
  BusinessBanner,
  EnterprisePlans,
  FrequentlyAskedQuestions,
  IndustrySlider,
  Partners,
} from '../features';

const BusinessPage: NextPage = () => {
  return (
    <>
      <BusinessBanner />
      <IndustrySlider />
      <Solutions />
      <EnterprisePlans />
      <Partners />
      <OurServices />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default BusinessPage;
