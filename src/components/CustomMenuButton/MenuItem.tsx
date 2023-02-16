import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { menuItemStyles } from './_styles';

export const MenuItem = ({ icon, title, link }: any) => (
  <Box as="li">
    <Flex {...menuItemStyles} className="dropdown-item" href={link}>
      <Box>{icon}</Box>
      <Text fontWeight="medium" mx="10px">
        {title}
      </Text>
    </Flex>
  </Box>
);
