import {
  Box,
  Flex,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

const boxStyles: GridItemProps = {
  minH: '150px',
  py: '1rem',
  fontWeight: 'bold',
  px: '1rem',
  bgColor: 'gray.100',
};

export const WhyWorkWithUs = () => {
  return (
    <Box w="80%" mx="auto" my="4rem">
      <Heading my="2rem">Why Work With Us</Heading>

      <Grid
        gap="1rem"
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
      >
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677881849/donehub-assets/svg-icons/Layer_1_1_y5it81.svg"
            alt=""
            mx="auto"
          />
          <Text my="2rem" fontWeight="bold">
            Latest Fleet of Drones
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677881849/donehub-assets/svg-icons/Competitive_pricing_ab3jo6.svg"
            alt=""
            mx="auto"
          />
          <Text my="2rem" fontWeight="bold">
            Competitive Pricing
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677881849/donehub-assets/svg-icons/who_Integration_program_design_for_tpwri9.svg"
            alt=""
            mx="auto"
          />
          <Text my="2rem" fontWeight="bold">
            Customer-Oriented Focus
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857992/donehub-assets/why%20work%20with%20us%20images/Certified_and_experience_pilots_gdwz0a.svg"
            alt=""
            mx="auto"
          />
          <Text my="2rem" fontWeight="bold">
            Experienced Pilots
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
