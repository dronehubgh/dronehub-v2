import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IconButton } from '../../../components';
import { EnterpriseCard } from './EnterpriseCard';

export const EnterprisePlans = () => {
  return (
    <Box textAlign="center" bgColor="brand.darkBlue" color="gray.100" py="4rem">
      <Heading size={{ base: 'lg', lg: 'xl' }} py="0.5rem" px="1rem">
        Enterprise Plans to Keep Your Business Ahead
      </Heading>
      <Text py="1rem" px="2rem" fontSize={{ base: '0.8rem', lg: '1rem' }}>
        Before you ask, we have delivered all the support you can think of
        getting.
      </Text>
      <IconButton
        fontSize="14px"
        color="gray.100"
        title="Learn more"
        maxW="150px"
        borderColor="gray.100"
        icon={<FaChevronRight size="0.5rem" />}
        bgColor="transparent"
      />
      <Flex
        color="gray.800"
        flexDir={{ base: 'column', lg: 'row' }}
        gap="1.5rem"
        w="80%"
        mx="auto"
        my="3rem"
      >
        <EnterpriseCard
          link="/enterprise?type=integration-program"
          title="Enterprise Integration Program"
          description="Designed to support businesses to seamlessly integrate drone technology into their work operations."
          bgColor="#D7E9FE"
        />
        <EnterpriseCard
          link="/enterprise?type=assure"
          title="Enterprise Assure"
          description="Designed as an essential support plan for drones purchased from us."
          bgColor="#FFEECC"
        />
      </Flex>
    </Box>
  );
};
