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

const { construction } = industryApplicationDetails;

const ConstructionPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Construction"
        tagline="Building the future"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676298057/donehub-assets/drones/Phantom_4_Multispectral_3_sajvta.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/construction_oufxpz.png" />
      <IndustryApplicationsSection {...construction} />
      <IndustryDroneSolutions
        industryName="Construction"
        industry="construction"
      />

      <Contact />
    </>
  );
};

export default ConstructionPage;
