import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uid } from 'uuid';
import { SwiperNavButtons } from '../../../../components';
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
          <SwiperNavButtons
            disable={getSlidesPerView().slide >= productCards.length}
          />
        </Swiper>
      )}
    </Box>
  );
};
