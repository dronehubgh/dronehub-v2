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
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864620/donehub-assets/svg-icons/Group_16526_zrahm7.svg"
            alt=""
          />
          <Text my="2rem" fontWeight="bold">
            Certified & Experienced Pilots
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677879551/donehub-assets/svg-icons/Network_of_experts_qpu18s.svg"
            alt=""
          />
          <Text my="2rem" fontWeight="bold">
            Certified & Experienced Pilots
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677879521/donehub-assets/svg-icons/Diverse_portfolio_of_past_project_cz2hux.svg"
            alt=""
          />
          <Text my="2rem" fontWeight="bold">
            Certified & Experienced Pilots
          </Text>
        </GridItem>
        <GridItem {...boxStyles}>
          <Image
            boxSize="80px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857827/donehub-assets/why%20work%20with%20us%20images/We_like_a_challenge_bemszg.svg"
            alt=""
          />
          <Text my="2rem" fontWeight="bold">
            Certified & Experienced Pilots
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
