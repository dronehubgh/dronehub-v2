import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { CustomMenuButton, IconButton } from '../../../components';

interface IEnterpriseCardProps extends BoxProps {
  title: string;
  description: string;
  link: string;
}

export const EnterpriseCard = ({
  title,
  description,
  link,
  ...rest
}: IEnterpriseCardProps) => {
  return (
    <Box w="100%" p="2rem" textAlign="left" {...rest}>
      <Text fontSize="lg" fontWeight="bold" py="0.5rem">
        {title}
      </Text>
      <Text py="0.5rem" color="gray.600">
        {description}
      </Text>
      <Flex flexDir={{ base: 'column', lg: 'row' }} my="0.5rem">
        <Link href={link}>
          <IconButton
            title="Learn more"
            icon={<FaChevronRight size="0.5rem" />}
            maxW={{ base: '100%', lg: '150px' }}
            borderColor="brand.blue"
            mx="0.5rem"
          />
        </Link>
        <CustomMenuButton
          title="Book now"
          maxW={{ base: '100%', lg: '150px' }}
          bg="brand.blue"
          color="gray.100"
          _active={{ bgColor: 'none' }}
          mx="0.5rem"
        />
      </Flex>
    </Box>
  );
};
