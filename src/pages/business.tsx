import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { OurServices, Partners, Solutions } from '../components';
import { Banner } from '../components';
import {
  EnterprisePlans,
  FrequentlyAskedQuestions,
  IndustrySlider,
} from '../features';

const coverImage =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676544493/donehub-assets/business-bg_ypmtbq.png';

const BusinessPage: NextPage = () => {
  return (
    <>
      <Banner coverImage={coverImage} />
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
