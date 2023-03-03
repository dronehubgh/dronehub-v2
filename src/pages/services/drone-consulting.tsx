import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';
import {
  ConsultingApproach,
  ConsultingServices,
  Details,
  WhyWorkWithUS,
} from '../../features/services/drone-consulting';

const DroneConsulting: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Consulting Services"
        description="Helping you succeed in your drone program"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-2_rvfqw8.png"
        cta={
          <CustomMenuButton
            title="Book now"
            bgColor="white"
            color="brand.blue"
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />

      <Details />
      <ConsultingServices />
      <WhyWorkWithUS />
      <ConsultingApproach />
      <ConnectWithUs
        description="Book a consultation session today for your needs. 
For more information, send us a message.
"
      />
    </>
  );
};

export default DroneConsulting;
