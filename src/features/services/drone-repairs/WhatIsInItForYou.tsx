import {
  Box,
  Flex,
  Grid,
  GridItem,
  GridItemProps,
  Text,
} from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import { A11y, Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uid } from 'uuid';
import { SwiperNavButtons } from '../../../components';

const gridItemStyles: GridItemProps = {
  minH: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white',
  boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)',
};

const slideStyles: CSSProperties = {
  maxWidth: '300px',
  minWidth: '300px',
  height: '300px',
  boxSizing: 'border-box',
  border: '1px solid #cdcdcd',
};

export const WhatIsInItForYou = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 20,
    slidesPerView: 'auto',
  };

  const items = [
    {
      title: 'Part & Service Warranty',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691781/donehub-assets/Mask_1_uqknqh.png',
    },
    {
      title: 'Timely Service',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691781/donehub-assets/Mask_2_mdwck4.png',
    },
    {
      title: 'Customer-Oriented Service',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691780/donehub-assets/Mask_3_hfrsri.png',
    },
    {
      title: 'OEM & Quality Parts',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691781/donehub-assets/Mask_4_iott8x.png',
    },
    {
      title: 'Free Consultation',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691781/donehub-assets/Mask_5_iuemkk.png',
    },
    {
      title: 'Certified Technicians',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677691781/donehub-assets/Mask_6_x5mc5v.png',
    },
  ];

  return (
    <Box>
      <Box
        w={{ base: '90%', lg: '80%' }}
        mx="auto"
        my="6rem"
        textAlign="center"
      >
        <Text my="2rem" fontWeight="bold" fontSize={{ base: 'lg', lg: '2xl' }}>
          What’s in it for you?
        </Text>
        <Text my="3rem">
          Our team of trained technicians provide the assurance that every
          repair is completed on time and with due care. So you can be sure to
          get maximum value for your money. The best part? We offer part and
          service warranty on all repairs.{' '}
        </Text>

        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap="20px"
          display={{ base: 'none', lg: 'grid' }}
        >
          {items.map((item) => (
            <GridItem
              key={uid()}
              {...gridItemStyles}
              bg={`center / cover url(${item.imageUrl})`}
            >
              {item.title}
            </GridItem>
          ))}
        </Grid>

        <Box display={{ base: 'block', lg: 'none' }}>
          <Swiper
            {...sliderSettings}
            style={{ width: '100%', height: '100%', textAlign: 'left' }}
          >
            {items.map((item) => (
              <SwiperSlide style={slideStyles} key={uid()}>
                <Flex
                  justify="center"
                  align="center"
                  h="100%"
                  bg={`center / cover url(${item.imageUrl})`}
                  boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.7)"
                  color="white"
                  fontWeight="bold"
                >
                  {item.title}
                </Flex>
              </SwiperSlide>
            ))}

            <SwiperNavButtons />
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};
