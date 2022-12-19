import React from 'react';
import { IconButton, ReserveNowMenu } from '../../../components';
import { BiChevronRight } from 'react-icons/bi';
import { Box, Flex } from '@chakra-ui/react';

export const ProductCTAButtons = () => (
  <Flex justify={{ base: 'center', lg: 'flex-start' }}>
    <Box mx={1}>
      <IconButton title="Learn more" icon={<BiChevronRight />} />
    </Box>
    <Box mx={1}>
      <ReserveNowMenu />
    </Box>
  </Flex>
);
