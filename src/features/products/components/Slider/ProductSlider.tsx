import React, { LegacyRef, useRef } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCTAButtons } from '../ProductCTAButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { useMedia } from 'react-use';

export const ProductSlider = () => {
  const isXLarge = useMedia('(min-width: 1420px)');
  const isLarge = useMedia('(min-width: 1280px)');
  const isMedium = useMedia('(min-width: 1024px)');

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: isXLarge ? 50 : isLarge ? 200 : isMedium ? 100 : 50,
    slidesPerView: isLarge ? 3 : isMedium ? 2 : 1,
    loop: true,
  };

  return (
    <Box w="100%">
      <Swiper {...sliderSettings}>
        <SwiperSlide>
          <Box>
            <ProductCard
              title="Card 1"
              cta={<ProductCTAButtons />}
              imageUrl="./assets/images/drones/drone-2.png"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Card 2"
            cta={<ProductCTAButtons />}
            imageUrl="./assets/images/drones/drone-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Card 3"
            cta={<ProductCTAButtons />}
            imageUrl="./assets/images/drones/drone-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Card 4"
            cta={<ProductCTAButtons />}
            imageUrl="./assets/images/drones/drone-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Card 5"
            cta={<ProductCTAButtons />}
            imageUrl="./assets/images/drones/drone-2.png"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
