import React from 'react';
import { IconButton, ReserveNowMenu } from '../../../components';
import { BiChevronRight } from 'react-icons/bi';
import { Box, Flex } from '@chakra-ui/react';

export const ProductCTAButtons = () => (
  <Flex>
    <Box w="50%" mx={1}>
      <IconButton title="Learn more" icon={<BiChevronRight />} />
    </Box>
    <Box w="50%" mx={1}>
      <ReserveNowMenu />
    </Box>
  </Flex>
);
