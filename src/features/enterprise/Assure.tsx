import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FrequentlyAskedQuestions, IconButton } from '../../components';
import { InfoCard } from './components/InfoCard';
import { TalkToConsultant } from './components/TalkToConsultant';

export const Assure = () => {
  return (
    <Box w="100%" mb="4rem">
      <Flex mb="4rem" justify="center" flexDir={{ base: 'column', lg: 'row' }}>
        <Box
          w={{ base: '350px', lg: '300px' }}
          borderWidth="1px"
          borderColor="gray.100"
          mx={{ base: 'auto', lg: '0' }}
          p="1.5rem"
        >
          <Text fontWeight="bold" borderBottomWidth="1px" pb="0.5rem" mb="2rem">
            Included in Enterprise Assure
          </Text>

          <Flex>
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Support for repair fees to your aircraft up to the coverage
              amount.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              The coverage amount is up to 75% of the market price of your
              aircraft for repair services within the validity period. The
              market price of the aircraft cannot exceed the purchase value of
              your aircraft at the time of purchase.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              There is no limit to the number of times your aircraft can be
              repaired, provided your coverage amount is not exceeded within the
              validity period.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              It includes a coverage amount not exceeding 75% of the market
              price of your aircraft towards the replacement cost of your
              aircraft with a new one, under approved circumstances.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="2rem" color="brand.blue" />
            <Box>
              The plan provides protection for up to twelve (12) months and
              cannot be renewed after expiration.
            </Box>
          </Flex>
        </Box>
        <Box
          w={{ base: '350px', lg: '300px' }}
          borderWidth="1px"
          borderColor="gray.100"
          mx={{ base: 'auto', lg: '0' }}
          p="1.5rem"
        >
          <Text fontWeight="bold" borderBottomWidth="1px" pb="0.5rem" mb="2rem">
            Excluded from Enterprise Assure
          </Text>

          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="red" pt="0.5rem">
              <AiOutlineCloseCircle />
            </Box>
            <Box>
              It does not cover accessories like batteries, remote controllers,
              propellers and chargers.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="red" pt="0.5rem">
              <AiOutlineCloseCircle />
            </Box>
            <Box>
              Check the terms of service for a detailed list of exclusions.
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        bgColor="rgba(255, 170, 0, 0.2)"
        bgImage="/assets/images/bg-overlay.svg"
        h="300px"
        justify="center"
        align="center"
        px="2rem"
        textAlign="center"
      >
        Our Enterprise Assure Program is an essential support plan for drones
        purchased
        <br /> from us. It is designed to provide limited coverage in case of
        accidental damage.
        <br /> This program includes support for repair fees up to a coverage
        amount from
        <br /> accidental damage to your aircraft during normal use.
      </Flex>

      <InfoCard
        flexDir={{ base: 'column', lg: 'row' }}
        title="Who is the Enterprise Assure Program designed for?"
        description="The DroneHub Enterprise Assure Program is designed for all individuals who purchase drones from us. This plan provides limited coverage in case of accidental damage to your drones."
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676715966/donehub-assets/who_Integration_program_design_for_rppm1y.png"
      />

      <InfoCard
        textAlign={{ base: 'left', lg: 'right' }}
        flexDir={{ base: 'column', lg: 'row-reverse' }}
        title=" Which Products are Included in the Dronehub Enterprise Assure
            Program?"
        description="DJI Mavic 3, DJI Phantom 4 RTK, DJI Matrice 300 RTK, DJI Matrice 30 Series, DJI Mavic 2 Enterprise Advanced"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676715967/donehub-assets/Layer_1_ehj4me.png"
      />

      <TalkToConsultant />
      <FrequentlyAskedQuestions />
    </Box>
  );
};
