import { Box } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Card } from './Card';

const slideStyles: CSSProperties = {
  padding: '0.5rem',
  maxWidth: '400px',
  minWidth: '300px',
  boxSizing: 'border-box',
};
export const Slider = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 50,
    slidesPerView: 'auto',
  };

  return (
    <Box w="100%" h="100%">
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        <SwiperSlide style={slideStyles}>
          <Card title="Tips to Care for Your Drone Battery" bg="#461DF1" />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Card
            title="Tips to Care for Your Drone Battery"
            bg="#0066FF;
"
          />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Card title="Tips to Care for Your Drone Battery" bg="#FFAA00" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
