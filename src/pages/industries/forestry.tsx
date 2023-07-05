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

const { forestry } = industryApplicationDetails;

const ForestryPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Forestry"
        tagline="Protecting our environment and natural resources"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676986879/donehub-assets/drones/p1V2_3_1_ckzavk.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/forestry_svpz8w.png" />
      <IndustryApplicationsSection {...forestry} />
      <IndustryDroneSolutions industryName="Forestry" industry="forestry" />

      <Contact />
    </>
  );
};

export default ForestryPage;
