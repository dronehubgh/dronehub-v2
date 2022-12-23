import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useMedia } from 'react-use';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';
interface ProductSliderProps {
  productCards: ReactNode[];
}

export const ProductSlider = ({ productCards }: ProductSliderProps) => {
  const isXLarge = useMedia('(min-width: 1420px)');
  const isLarge = useMedia('(min-width: 1280px)');
  const isMedium = useMedia('(min-width: 1024px)');

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: isXLarge ? 50 : isLarge ? 150 : isMedium ? 100 : 50,
    slidesPerView: isLarge ? 3 : isMedium ? 2 : 1,
    freeMode: true,
  };

  return (
    <Box w="100%">
      {productCards.length === 0 ? (
        <Flex
          justify="center"
          align="center"
          minH="500px"
          color="gray.100"
          className="fst-italic"
        >
          No Items Available for this tab
        </Flex>
      ) : (
        <Swiper {...sliderSettings}>
          {productCards.map((card) => (
            <SwiperSlide key={uid()}>{card}</SwiperSlide>
          ))}
          <SwipeNavButtons />
        </Swiper>
      )}
    </Box>
  );
};

const SwipeNavButtons = () => {
  const swiper = useSwiper();
  return (
    <Box m="1rem">
      <IconButton
        rounded="full"
        icon={<FaChevronLeft />}
        aria-label="Prev"
        borderColor="brand.blue"
        borderWidth="1px"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        rounded="full"
        aria-label="Next"
        bgColor="brand.blue"
        color="gray.100"
        mx="1rem"
        _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
        _active={{ bgColor: 'brand.blue', color: 'gray.100' }}
        icon={<FaChevronRight />}
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};
