import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { IconButton } from '../../components';

export const Opportunities = () => {
  return (
    <Box
      bgColor="brand.blue"
      py="4rem"
      my="4rem"
      bgImage="/assets/images/bg-overlay.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box w={{ base: '90%', lg: '80%' }} mx="auto">
        <Heading size="lg" color="white">
          Shaping Visions, Building People, Making Impact
        </Heading>
        <Text color="gray.200">
          Discover endless opportunities ahead of you
        </Text>
        <Flex my="1rem" gap="10px" flexDir={{ base: 'column', md: 'row' }}>
          <IconButton
            title="Jin As A Volunteer"
            icon={<BiChevronRight />}
            maxW={{ base: '100%', md: '200px' }}
            color="gray.100"
            bgColor="brand.blue"
          />
          <IconButton
            title="Jin Our Team"
            icon={<BiChevronRight />}
            maxW={{ base: '100%', md: '200px' }}
          />
        </Flex>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
          mx="auto"
          gap="50px"
          my="2rem"
          color="white"
        >
          <GridItem>
            <Box>
              <Flex gap="10px">
                <Image
                  boxSize="50px"
                  src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677923272/donehub-assets/svg-icons/Group_1_uzxmko.svg"
                  alt=""
                />
                <Text fontWeight="bold" my="1rem">
                  Top-notch Products & Services
                </Text>
              </Flex>
              <Text>
                Through our partnership with industry-leading manufacturers, we
                maintain a high standard in delivering quality products, repairs
                and testing, customer after-sales support and technical
                services.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Flex gap="10px">
                <Image
                  boxSize="50px"
                  src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677923277/donehub-assets/svg-icons/Group_16520_jjgkql.svg"
                  alt=""
                />
                <Text fontWeight="bold" my="1rem">
                  Results-Oriented Service
                </Text>
              </Flex>
              <Text>
                We focus on providing the best result for clients centered
                around safety, integrity, service excellence, competitive value
                and innovation.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Flex gap="10px">
                <Image
                  boxSize="50px"
                  src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677923274/donehub-assets/svg-icons/Group_2_gdoyrt.svg"
                  alt=""
                />
                <Text fontWeight="bold" my="1rem">
                  Innovative Research
                </Text>
              </Flex>
              <Text>
                We are constantly researching for the best drone technology on
                the market and offering tailored solutions to support both
                individuals and enterprises.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Flex gap="10px">
                <Image
                  boxSize="50px"
                  src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677923280/donehub-assets/svg-icons/Group_3_oey8lg.svg"
                  alt=""
                />
                <Text fontWeight="bold" my="1rem">
                  Empathy-driven Team
                </Text>
              </Flex>
              <Text>
                We are driven by empathy and that is why strive to offer you our
                best solutions.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
