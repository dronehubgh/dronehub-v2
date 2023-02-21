import { NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components';
import { solutionsItems } from '../../data/products';
import {
  BannerImage,
  IndustryDroneSolutions,
  IndustryHero,
} from '../../features';
import { IndustryApplicationsSection } from '../../layouts';
import { industryApplicationDetails } from '../../data/industry';

const { survey } = industryApplicationDetails;

const SurveyingPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Surveying and Mapping"
        tagline="Automate Workflows and Gather Accurate Data"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676986879/donehub-assets/drones/p1V2_3_1_ckzavk.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/aerial_surveying_zg22fl.png" />
      <IndustryApplicationsSection {...survey} />
      <IndustryDroneSolutions
        industryName="Surveying"
        drones={solutionsItems.filter((item) =>
          item.categories.includes('Surveying')
        )}
      />
      <Contact />
    </>
  );
};

export default SurveyingPage;
