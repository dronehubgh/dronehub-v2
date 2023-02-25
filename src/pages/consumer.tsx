import { NextPage } from 'next';
import React from 'react';
import { Banner, OurServices, Partners } from '../components';
import { SliderGallery } from '../components/SliderGallery';
import { solutionsItems } from '../data/products';
import { ExploreDrones, FrequentlyAskedQuestions, WhoWeAre } from '../features';

const coverImage =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022160/donehub-assets/header-middle_gvagnz.png';

const images = [
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022073/donehub-assets/agro_o2ttkr.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022136/donehub-assets/slide2_xjgd27.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022122/donehub-assets/slide-1_mbundf.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022160/donehub-assets/header-middle_gvagnz.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022191/donehub-assets/banner-img_cu8aii.png',
];

const ConsumerPage: NextPage = () => {
  return (
    <div>
      <Banner coverImage={coverImage} />
      <SliderGallery images={images} />
      <ExploreDrones
        drones={solutionsItems.filter((item) =>
          item.categories.includes('Surveying')
        )}
      />
      <WhoWeAre />
      <Partners />
      <OurServices />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default ConsumerPage;
