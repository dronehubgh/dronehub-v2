import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Newsletter } from '../../components';
import { ReadyForMore } from '../../components/ReadyForMore';
import { ConnectWithUs } from './ConnectWithUs';
import { ExploreProducts } from './ExploreProducts';
import { Extras } from './Extras';
import { GetInTouch } from './GetInTouch';
import { OurStore } from './OurStore';
import { Services } from './Services';
import { footerBoxStyles, linkTextStyles } from './_styles';

export const Footer = () => {
  return (
    <Box>
      <ReadyForMore />
      <Box h={{ base: '320px', lg: '0' }} bg="green" />
      <Box {...footerBoxStyles}>
        <Box
          pos="absolute"
          top="-320px"
          left="50%"
          transform="translateX(-50%)"
          w={{ base: '100%', lg: '80%' }}
        >
          <Newsletter />
        </Box>
        <Box h={{ base: '200px', lg: '100px' }} />

        {/* ------ footer details starts here */}
        <Box w={{ base: '90%', lg: '80%' }} m="auto">
          <Flex
            my={{ base: '4rem', lg: '6rem' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Box w={{ base: '100%', md: '20%' }} mx="15px" py="1rem">
              <Image src="/assets/logo-white.svg" alt="Drone hub logo" />
            </Box>
            <Box w={{ base: '100%', md: '30%' }} mx="15px" py="1rem">
              <Text>
                Your preferred drone products and solutions provider in Africa
              </Text>
              <Text fontWeight={700} mt={4}>
                Everything drones
              </Text>
            </Box>
            <Box w={{ sm: '100%', md: '45%' }} mx="15px" py="2rem">
              <ConnectWithUs />
              <GetInTouch />
            </Box>
          </Flex>
          <Divider orientation="horizontal" my="20px" borderColor="gray.700" />

          <Grid templateColumns={{ md: 'repeat(4, 1fr)' }}>
            <GridItem>
              <OurStore />
            </GridItem>
            <GridItem>
              <ExploreProducts />
            </GridItem>
            <GridItem>
              <Services />
            </GridItem>
            <GridItem>
              <Extras />
            </GridItem>

            <GridItem mt={{ base: '2rem', md: '0' }}>
              <NextLink href="/about" passHref>
                <Text
                  fontWeight={500}
                  mt={{ base: 10 }}
                  mb={3}
                  _hover={{ textDecor: 'none' }}
                >
                  About Us
                </Text>
              </NextLink>
            </GridItem>
            <Divider my="1rem" display={{ md: 'none' }} />
            <GridItem>
              <NextLink href="/deals" passHref>
                <Text
                  fontWeight={500}
                  mt={{ base: 10 }}
                  mb={3}
                  _hover={{ textDecor: 'none' }}
                >
                  Deals Store
                </Text>
              </NextLink>
            </GridItem>
          </Grid>

          <Divider orientation="horizontal" my="20px" borderColor="gray.500" />

          <Flex align="center" display={{ base: 'block', lg: 'flex' }}>
            <Text
              fontSize="sm"
              color="white"
              py="5"
              w={{ base: '100%', md: '40%' }}
            >
              &copy; 2021 Dronehub Ghana Limited. All rights reserved.{' '}
            </Text>

            <Flex
              color="brand.lightBlue"
              ml={{ lg: '3rem' }}
              justify="space-between"
              flexDir={{ base: 'column', lg: 'row' }}
              fontSize="sm"
              w={{ base: '100%', md: '60%' }}
            >
              <NextLink
                href="/terms-and-conditions"
                passHref
                className="py-2 link-item"
              >
                <Text {...linkTextStyles}>Terms and Conditions </Text>
              </NextLink>

              <NextLink href="/privacy" passHref className="py-2">
                <Text {...linkTextStyles}>Privacy Policy</Text>
              </NextLink>

              <NextLink href="/after-sales-policies" passHref className="py-2">
                <Text {...linkTextStyles}>After Sales Policy</Text>
              </NextLink>

              <NextLink href="/warranty-policy" passHref className="py-2">
                <Text {...linkTextStyles}>Warranty Policy</Text>
              </NextLink>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
