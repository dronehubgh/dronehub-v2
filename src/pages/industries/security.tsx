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

const { security } = industryApplicationDetails;

const SecurityPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Security"
        tagline="Aerial security, now as important as ground security"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676298113/donehub-assets/drones/Matrice_30_3_c9n86v.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/security_mbrvmy.png" />
      <IndustryApplicationsSection {...security} />
      <IndustryDroneSolutions industryName="Security" industry="security" />

      <Contact />
    </>
  );
};

export default SecurityPage;
