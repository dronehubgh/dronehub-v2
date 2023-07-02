import { Box } from '@chakra-ui/react';
import { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICarouselItem } from '../../models/app';
import { Slide } from './Slide';
import { carouselStyles } from './_styles';

export const ProductsCarousel = ({ items }: { items: ICarouselItem[] }) => {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader" style="margin-top: 2rem;"></span>`;
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
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
