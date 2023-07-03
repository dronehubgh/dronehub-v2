import React from 'react';
import {
  BlogBanner,
  BlogSlider,
  CustomerStories,
  Guides,
  OurStories,
} from '../features';
import { client } from '../lib';
import { IBlogOverview } from '../models/app';
import { blogQuery } from '../queries';

const getIndex = (list: IBlogOverview[]) =>
  Math.floor(Math.random() * list.length);

interface Props {
  articles: IBlogOverview[];
}
const BlogPage = ({ articles }: Props) => {
  return (
    <div>
      <BlogBanner />
      {articles.length > 0 && (
        <BlogSlider
          articles={[articles[articles.length - 1], articles[1], articles[4]]}
        />
      )}

      <OurStories
        articles={articles.filter((article) => article.type === 'story')}
      />
      <Guides
        articles={articles.filter((article) => article.type === 'guide')}
      />
      <CustomerStories />
    </div>
  );
};

export const getServerSideProps = async () => {
  const articles: IBlogOverview[] = await client.fetch(blogQuery);

  return {
    props: { articles },
  };
};

export default BlogPage;
