import { Box } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { useMedia } from 'react-use';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';

export const SliderGallery = () => {
  const xxl = useMedia('(min-width: 1492px)', false);
  const xl = useMedia('(min-width: 1190px)', false);
  const lg = useMedia('(min-width: 1024px)', false);
  const md = useMedia('(min-width: 600px)', false);

  const getSize = () => {
    if (xxl) return { w: '800px', h: '650px' };
    if (xl) return { w: '600px', h: '450px' };
    if (lg) return { w: '500px', h: '400px' };
    if (md) return { w: '400px', h: '250px' };
    return { w: '250px', h: '200px' };
  };

  const slideStyles: CSSProperties = {
    padding: '0.5rem',
    maxWidth: getSize().w,
    minWidth: '200px',
    height: getSize().h,
    boxSizing: 'border-box',
    backgroundColor: 'green',
    borderRadius: '20px',
  };

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
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%' }}
        className="dh-slider-gallery"
      >
        <SwiperSlide
          style={{
            ...slideStyles,
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676022073/donehub-assets/agro_o2ttkr.png)',
          }}
        />
        <SwiperSlide
          style={{
            ...slideStyles,
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676022136/donehub-assets/slide2_xjgd27.png)',
          }}
        />
        <SwiperSlide
          style={{
            ...slideStyles,
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676022122/donehub-assets/slide-1_mbundf.png)',
          }}
        />
        <SwiperSlide
          style={{
            ...slideStyles,
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676022160/donehub-assets/header-middle_gvagnz.png)',
          }}
        />
        <SwiperSlide
          style={{
            ...slideStyles,
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676022191/donehub-assets/banner-img_cu8aii.png)',
          }}
        />
      </Swiper>
    </Box>
  );
};
