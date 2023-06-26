import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../../components';
import { StoryCard } from './StoryCard';

export const OurStories = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,
  };

  return (
    <Box my="3rem">
      <Heading mx="2rem" size={{ base: 'md', lg: 'lg' }} py="1rem">
        Our Stories
      </Heading>

      <Box p="2rem" bg="gray.200">
        <Swiper {...sliderSettings} style={{ width: '100%' }}>
          <SwiperNavButtons />

          <SwiperSlide style={{ maxWidth: '300px' }}>
            <StoryCard
              title="Matrice 300 RTK & Zenmuse H20 Payloads: A Powerful Combination for Industrial Work "
              borderBottomLeftRadius="3xl"
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Drones in Agriculture: Delivering Sustainable Value"
              bgColor="yellow.500"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '230px' }}>
            <StoryCard
              title="Zenmuse P1 Elevates Efficiency and Accuracy in Aerial Surveying"
              bgColor="blue.400"
              endStrNum={45}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
