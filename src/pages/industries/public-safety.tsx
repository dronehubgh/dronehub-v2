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

const { publicSafety } = industryApplicationDetails;

const PublicSafetyPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Public Safety"
        tagline="Serving communities better with accurate aerial insights"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676986879/donehub-assets/drones/p1V2_3_1_ckzavk.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/public_safety_astgak.png" />
      <IndustryApplicationsSection {...publicSafety} />
      <IndustryDroneSolutions
        industryName="Public Safety"
        industry="public-safety"
      />

      <Contact />
    </>
  );
};

export default PublicSafetyPage;
