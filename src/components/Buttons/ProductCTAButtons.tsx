import React from 'react';
import { IconButton, CustomMenuButton } from '..';
import { BiChevronRight } from 'react-icons/bi';
import { Box, ButtonProps, Flex, FlexProps } from '@chakra-ui/react';
import { CTAStyles } from '../../features/products/components/_styles';
import Link from 'next/link';

interface ProductCTAButtonsProps {
  btn1Link: string;
  containerStyles?: FlexProps;
  btn1Styles?: ButtonProps;
  btn2Styles?: ButtonProps;
}

export const ProductCTAButtons = ({
  btn1Link,
  containerStyles,
  btn1Styles,
  btn2Styles,
}: ProductCTAButtonsProps) => (
  <Flex {...CTAStyles} {...containerStyles}>
    <Box mr={2}>
      <Link href={btn1Link}>
        <IconButton
          title="Learn more"
          icon={<BiChevronRight />}
          bg="transparent"
          color="brand.blue"
          borderColor="brand.blue"
          {...btn1Styles}
        />
      </Link>
    </Box>
    <Box>
      <CustomMenuButton title="Reserve now" {...btn2Styles} />
    </Box>
  </Flex>
);
