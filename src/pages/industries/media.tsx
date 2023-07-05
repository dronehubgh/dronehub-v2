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

const { media } = industryApplicationDetails;

const MediaPage: NextPage = () => {
  return (
    <>
      <IndustryHero
        title="Drone Solutions for Media & Entertainment"
        tagline="Explore new levels of content creation"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676987188/donehub-assets/drones/media-drone_ymugup.png"
      />

      <BannerImage imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/media_swh9vw.png" />
      <IndustryApplicationsSection {...media} />
      <IndustryDroneSolutions
        industryName="Media & Entertainment"
        industry="media-entertainment"
      />

      <Contact />
    </>
  );
};

export default MediaPage;
