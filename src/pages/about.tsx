import { NextPage } from 'next';
import React from 'react';
import {
  AboutBanner,
  AboutGallery,
  AboutUs,
  Opportunities,
  VisionAndMission,
} from '../features';

const AboutPage: NextPage = () => {
  return (
    <>
      <AboutBanner />
      <VisionAndMission />
      <AboutGallery />
      <AboutUs />
      <Opportunities />
    </>
  );
};

export default AboutPage;
