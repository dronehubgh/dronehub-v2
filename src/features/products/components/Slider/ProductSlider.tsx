import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useMedia } from 'react-use';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';
import { NoItemsAvailable } from './NoItemsAvailable';
interface ProductSliderProps {
  productCards: ReactNode[];
}

export const ProductSlider = ({ productCards }: ProductSliderProps) => {
  const xxl = useMedia('(min-width: 1492px)', false);
  const xl = useMedia('(min-width: 1190px)', false);
  const lg = useMedia('(min-width: 1024px)', false);
  const md = useMedia('(min-width: 600px)', false);

  const getSlidesPerView = (): { slide: number; space: number } => {
    if (xxl) return { slide: 4, space: 10 };
    if (xl) return { slide: 3, space: 30 };
    if (lg) return { slide: 2, space: 50 };
    if (md) return { slide: 2, space: 10 };
    return { slide: 1, space: 20 };
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: getSlidesPerView().space,
    slidesPerView: getSlidesPerView().slide,
    freeMode: true,
  };

  return (
    <Box w="100%" overflowX="auto">
      {productCards.length === 0 ? (
        <NoItemsAvailable />
      ) : (
        <Swiper {...sliderSettings} style={{ width: '100%' }}>
          {productCards.map((card) => (
            <SwiperSlide key={uid()} style={{ padding: '0.5rem' }}>
              {card}
            </SwiperSlide>
          ))}
          <SwipeNavButtons
            disable={getSlidesPerView().slide >= productCards.length}
          />
        </Swiper>
      )}
    </Box>
  );
};

const SwipeNavButtons = ({ disable }: { disable: boolean }) => {
  const swiper = useSwiper();
  return (
    <Box m="1.5rem">
      <IconButton
        rounded="full"
        icon={<FaChevronLeft />}
        aria-label="Prev"
        borderColor="brand.blue"
        borderWidth="1px"
        onClick={() => swiper.slidePrev()}
        disabled={disable}
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
        disabled={disable}
      />
    </Box>
  );
};
