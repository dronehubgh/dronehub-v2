import { Flex } from '@chakra-ui/react';
import React from 'react';

export const NoItemsAvailable = () => {
  return (
    <Flex
      justify="center"
      align="center"
      minH="500px"
      color="gray.100"
      className="fst-italic"
    >
      No Items Available for this tab
    </Flex>
  );
};
