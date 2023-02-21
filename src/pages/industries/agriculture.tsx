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

const { agriculture } = industryApplicationDetails;

const AgriculturePage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Agriculture"
        tagline="Explore better ways to farm"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676297995/donehub-assets/drones/Agras_T20_2_n3x2z1.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/agriculture_eovnmd.png" />
      <IndustryApplicationsSection {...agriculture} />
      <IndustryDroneSolutions
        industryName="Agriculture"
        drones={solutionsItems.filter((item) =>
          item.categories.includes('Agriculture')
        )}
      />

      <Contact />
    </>
  );
};

export default AgriculturePage;
