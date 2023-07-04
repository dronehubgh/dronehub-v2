import { Box, Text } from '@chakra-ui/react';
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

        {(article._type as any) === 'customerStories' && (
          <Box mx="2rem" mb="2rem">
            <Text fontWeight="bold" my="1rem">
              Company: {(article as any).customerName}
            </Text>
            <Text fontWeight="bold">
              Industry Vertical: Company: {(article as any).industryVertical}
            </Text>
          </Box>
        )}

        <Content content={article.content} />
      </Box>

      <Contact />
    </>
  );
};
