import { Box, Flex, Image } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperNavButtons } from '../../../../components';
import { ISolutionsItems } from './Solutions';
import { v4 as uid } from 'uuid';

const slideStyles: CSSProperties = {
  maxWidth: '400px',
  minWidth: '300px',
  height: '400px',
  boxSizing: 'border-box',
  border: '1px solid #cdcdcd',
};
export const SolutionsSlider = ({ items }: { items: ISolutionsItems[] }) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 0,
    slidesPerView: 'auto',
  };

  return (
    <Box w="100%" h="100%">
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {items.map((item) => (
          <SwiperSlide key={uid()} style={slideStyles}>
            <Flex justify="center" align="center" h="100%">
              <Image src={item.imageUrl} alt="" />
            </Flex>
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          bgColor="white"
          color="brand.blue"
          borderWidth="1px"
          borderColor="brand.blue"
          _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
          _active={{ bgColor: 'brand.blue', color: 'gray.100' }}
        />
      </Swiper>
    </Box>
  );
};
