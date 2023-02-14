import { IconButton, IconButtonProps, Box } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

interface ISwiperNavButtonProps extends Omit<IconButtonProps, 'aria-label'> {
  disable?: boolean;
  btn1Styles?: IconButtonProps;
  btn2Styles?: IconButtonProps;
}
export const SwiperNavButtons = ({
  disable,
  btn1Styles,
  btn2Styles,
  ...rest
}: ISwiperNavButtonProps) => {
  const swiper = useSwiper();
  return (
    <Box m="1.5rem">
      <IconButton
        rounded="full"
        icon={<FaChevronLeft />}
        borderColor="brand.blue"
        borderWidth="1px"
        onClick={() => swiper.slidePrev()}
        disabled={disable}
        {...rest}
        {...btn1Styles}
        aria-label="Prev"
      />
      <IconButton
        rounded="full"
        bgColor="brand.blue"
        color="gray.100"
        mx="1rem"
        _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
        _active={{ bgColor: 'brand.blue', color: 'gray.100' }}
        icon={<FaChevronRight />}
        onClick={() => swiper.slideNext()}
        disabled={disable}
        {...rest}
        {...btn2Styles}
        aria-label="Next"
      />
    </Box>
  );
};
