import { Box } from '@chakra-ui/react';
import { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { topDeals } from '../../../data/deals-products';

import { Slide } from './Slide';
import { carouselStyles } from './_styles';

export const DealsCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader"></span>`;
    },
  };

  const sliderSettings: SwiperOptions = {
    pagination,
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box {...carouselStyles}>
      <Swiper {...sliderSettings} className="dh-swiper">
        {topDeals.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
