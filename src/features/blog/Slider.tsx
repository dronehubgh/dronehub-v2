import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import { useMedia } from 'react-use';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';

interface BlogSliderProps {}

export const BlogSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader"></span>`;
    },
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    pagination,
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%' }}
        className="dh-slider-gallery"
      >
        <SwiperSlide style={{ maxWidth: '510px', background: 'green' }}>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '510px', background: 'green' }}>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '510px', background: 'green' }}>
          <StoryCard />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: '510px', background: 'green' }}>
          <StoryCard />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

const linerGradient = `linear-gradient(180deg, #CCD9E3 0%, #2480CD 100%)`;

const StoryCard = () => (
  <Flex
    maxW={{ base: '350px', lg: '500px' }}
    height={{ base: '300px', lg: '400px' }}
    bg={linerGradient}
    px="3rem"
    rounded="xl"
    color="brand.blue"
    m="1rem"
    flexDir="column"
    justify="center"
  >
    <Text fontSize={{ base: '2xl', lg: '4xl' }} fontWeight="bold">
      Zenmuse L1 LiDAR Solution Lights up the Surveying World
    </Text>
    <Flex align="center" mt="1rem" fontWeight="700">
      <Text mr="0.5rem" pb="0.4rem">
        Read more
      </Text>
      <BsArrowRight />
    </Flex>
  </Flex>
);
