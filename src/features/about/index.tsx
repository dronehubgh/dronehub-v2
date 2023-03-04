import { Box } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { IconButton } from '../../components';
import { InfoCard } from './InfoCard';

export { AboutBanner } from './Banner';
export { VisionAndMission } from './VisionAndMission';
export { Gallery as AboutGallery } from './Gallery';
export { Opportunities } from './Opportunities';

export const AboutUs = () => (
  <Box>
    <InfoCard
      flexDir={{ base: 'column', lg: 'row' }}
      title="Building an ecosystem for people and drones"
      description="We believe in a future where people and drones can thrive together."
      imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677922340/donehub-assets/svg-icons/Building_an_ecosystem_for_humans_1_ki7kql.svg"
      cta={
        <IconButton
          maxW="200px"
          bgColor="brand.blue"
          color="gray.100"
          title="Join Our Team"
          icon={<BiChevronRight />}
        />
      }
    />

    <InfoCard
      textAlign={{ base: 'left', lg: 'right' }}
      flexDir={{ base: 'column', lg: 'row-reverse' }}
      title=" A place to inspire people"
      description="Imagine a world where drones are integrated into every industry to enhance workflow"
      imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677922339/donehub-assets/svg-icons/Group_16444_qxh7vg.svg"
    />

    <InfoCard
      flexDir={{ base: 'column', lg: 'row' }}
      title="A drone products and solutions provider you can trust"
      description="We partner with industry-leading manufacturers to provide quality products to all our clients."
      imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677922344/donehub-assets/svg-icons/Group_sb5bzx.svg"
    />
  </Box>
);
