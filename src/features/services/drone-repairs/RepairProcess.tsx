import { Box, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uid } from 'uuid';
import { SwiperNavButtons } from '../../../components';
import { repairProcess } from '../../../data';

export const RepairProcess = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: 30,
    slidesPerView: 'auto',
  };

  return (
    <Box bgColor="brand.blue" py="2rem">
      <Box w="90%" ml="auto">
        <Text color="white" py="2rem" fontSize="2xl" fontWeight="bold">
          Detailed Repair Process
        </Text>
        <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
          {repairProcess.map((process, index) => (
            <SwiperSlide key={uid()} style={{ maxWidth: '200px' }}>
              <ProcessCard
                title={process.title}
                info={process.info}
                number={index + 1}
              />
            </SwiperSlide>
          ))}

          <SwiperNavButtons
            bgColor="transparent"
            color="white"
            borderWidth="1px"
            borderColor="white"
            _hover={{ bgColor: 'white', color: 'brand.blue' }}
            _active={{ bgColor: 'white', color: 'brand.blue' }}
          />
        </Swiper>
      </Box>
    </Box>
  );
};

interface processCardProps {
  title: string;
  info: string;
  number: number;
}
const ProcessCard = ({ title, info, number }: processCardProps) => {
  return (
    <Box bgColor="white" w="100%" minH="300px" px="1rem" py="3rem">
      <Tag size="md" variant="solid" bgColor="brand.blue">
        {number}
      </Tag>
      <Text fontWeight="bold" my="0.5rem">
        {title}
      </Text>
      <Text>{info}</Text>
    </Box>
  );
};
