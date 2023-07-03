import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../../components';
import { IBlogOverview } from '../../models/app';
import { StoryCard } from './StoryCard';

interface Props {
  articles: IBlogOverview[];
}

export const Guides = ({ articles }: Props) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,
  };

  return (
    <Box my="3rem">
      <Heading mx="2rem" size={{ base: 'md', lg: 'lg' }} py="1rem">
        Guides
      </Heading>

      <Box p="2rem" bgColor="#ADD7811A">
        <Swiper {...sliderSettings} style={{ width: '100%' }}>
          <SwiperNavButtons />

          {articles.map((article, index) => (
            <SwiperSlide style={{ maxWidth: '300px' }} key={article.id}>
              <StoryCard
                index={index}
                title={article.title}
                link={`/blog/${article.slug}`}
                borderBottomLeftRadius={index === 0 ? '3xl' : '0'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
