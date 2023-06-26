import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useMedia } from 'react-use';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';

interface BlogSliderProps {}

export const BlogSlider = () => {
  const xxl = useMedia('(min-width: 1492px)', false);
  const xl = useMedia('(min-width: 1190px)', false);
  const lg = useMedia('(min-width: 1024px)', false);
  const md = useMedia('(min-width: 600px)', false);

  // const getSize = () => {
  //   if (xxl) return { w: '510px', h: '430px' };
  //   if (xl) return { w: '600px', h: '450px' };
  //   if (lg) return { w: '500px', h: '400px' };
  //   if (md) return { w: '400px', h: '250px' };
  //   return { w: '250px', h: '200px' };
  // };

  // const slideStyles: CSSProperties = {
  //   // padding: '0.5rem',
  //   maxWidth: getSize().w,
  //   minWidth: '250px',
  //   // height: getSize().h,
  //   boxSizing: 'border-box',
  //   backgroundColor: 'green',
  //   borderRadius: '20px',
  // };

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
    slidesPerView: xxl || xl ? 3 : lg || md ? 2 : 1,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem" p="1rem">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%' }}
        className="dh-slider-gallery"
      >
        <SwiperSlide>
          <SliderStoryCard title="Zenmuse L1 LiDAR Solution Lights up the Surveying World" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderStoryCard title="10 Interesting Facts About Drones" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderStoryCard title="Drone Buying Tips" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

const linerGradient = `linear-gradient(180deg, #CCD9E3 0%, #2480CD 100%)`;

interface ISliderStoryCardProps {
  title: string;
}
const SliderStoryCard = ({ title }: ISliderStoryCardProps) => (
  <Flex
    w="100%"
    height={{ base: '300px', lg: '400px' }}
    bg={linerGradient}
    px="3rem"
    rounded="xl"
    color="brand.blue"
    m="1rem"
    flexDir="column"
    justify="center"
  >
    <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold">
      {title}
    </Text>
    <Flex align="center" mt="1rem" fontWeight="700">
      <Text mr="0.5rem" pb="0.4rem">
        Read more
      </Text>
      <BsArrowRight />
    </Flex>
  </Flex>
);
