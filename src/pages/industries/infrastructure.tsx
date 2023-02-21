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

const { infrastructure } = industryApplicationDetails;

const InfrastructurePage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Energy and Infrastructure "
        tagline="Enhancing safety, efficiency and productivity"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676987281/donehub-assets/drones/infrastructure-drone_1_w4mpdi.png"
      />
      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/infrastructure_b7tmz7.png" />
      <IndustryApplicationsSection {...infrastructure} />
      <IndustryDroneSolutions
        industryName="Energy & Infrastructure"
        drones={solutionsItems.filter((item) =>
          item.categories.includes('Energy & Infrastructure')
        )}
      />

      <Contact />
    </>
  );
};

export default InfrastructurePage;
