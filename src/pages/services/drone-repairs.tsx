import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ServiceHeroBanner } from '../../features';
import {
  BookARepair,
  Details,
  DronePlatformsWeRepair,
  HowWeOperate,
  RepairProcess,
  WhatIsInItForYou,
  WhatWeFix,
} from '../../features/services/drone-repairs';

const DroneRepairs: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Repair Services"
        description="Let’s help you get your drone flying again"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-8_juxl9n.png"
        btnLabel="Request a Repair"
      />
      <Details />
      <Box bgColor="rgba(216, 216, 216, 0.15)" py="4rem">
        <HowWeOperate />
        <RepairProcess />
      </Box>
      <WhatIsInItForYou />
      <WhatWeFix />
      <DronePlatformsWeRepair />
      <BookARepair />
    </>
  );
};

export default DroneRepairs;
