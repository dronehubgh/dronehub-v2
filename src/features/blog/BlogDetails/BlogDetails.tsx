import { Box } from '@chakra-ui/react';
import React from 'react';
import { Contact } from '../../../components';
import { IBlogArticle } from '../../../models/app';
import { Content } from './Content';
import { DurationSection } from './DurationSection';
import { Header } from './Header';

interface Props {
  article: IBlogArticle;
}
export const BlogDetails = ({ article }: Props) => {
  console.log(article);

  return (
    <>
      <Header title={article.title} tagline={article.tagline} />
      <Box w={{ base: '98%', lg: '90%' }} mx="auto">
        <DurationSection duration={article.duration} />

        <Content content={article.content} />
      </Box>

      <Contact />
    </>
  );
};
