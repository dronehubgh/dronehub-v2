import { Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components';
import { solutionsItems } from '../../data/products';
import {
  BannerImage,
  IndustryDroneSolutions,
  IndustryHero,
} from '../../features';
import { industryApplicationDetails } from '../../data/industry';
import { IndustryApplicationsSection } from '../../layouts';

const { mining } = industryApplicationDetails;

const MiningPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Mining"
        tagline="Smart mining systems"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676987730/donehub-assets/drones/mining-drone_1_n9erck.png"
      />
      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/mining_ikjcph.png" />
      <IndustryApplicationsSection {...mining} />
      <IndustryDroneSolutions industryName="Mining" industry="mining" />

      <Contact />
    </>
  );
};

export default MiningPage;
