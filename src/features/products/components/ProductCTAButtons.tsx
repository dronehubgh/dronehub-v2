import React from 'react';
import { IconButton, ReserveNowMenu } from '../../../components';
import { BiChevronRight } from 'react-icons/bi';
import { Box, Flex } from '@chakra-ui/react';
import { CTAStyles } from './_styles';

export const ProductCTAButtons = () => (
  <Flex {...CTAStyles}>
    <Box mr={2}>
      <IconButton title="Learn more" icon={<BiChevronRight />} />
    </Box>
    <Box>
      <ReserveNowMenu />
    </Box>
  </Flex>
);
