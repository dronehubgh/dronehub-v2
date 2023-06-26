import React from 'react';
import {
  BlogBanner,
  BlogSlider,
  CustomerStories,
  Guides,
  OurStories,
} from '../features';

const BlogPage = () => {
  return (
    <div>
      <BlogBanner />
      <BlogSlider />

      <OurStories />
      <Guides />
      <CustomerStories />
    </div>
  );
};

export default BlogPage;
