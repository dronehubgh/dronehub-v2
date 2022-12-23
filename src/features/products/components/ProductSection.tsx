import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { productSection } from './_styles';

const { headingStyles, boxStyles } = productSection;

interface ProductSectionProps {
  title: string;
  subTitle: string;
  bgImageUrl: string;
  content: ReactNode;
}

export const ProductSection = ({
  title,
  subTitle,
  bgImageUrl,
  content,
}: ProductSectionProps) => {
  return (
    <Box bgImage={bgImageUrl} {...boxStyles}>
      <Box h="100%">
        <Box pt="2rem" pb="3rem">
          <Heading {...headingStyles}>{title}</Heading>
          <Heading {...headingStyles}>{subTitle}</Heading>
        </Box>
        {content}
      </Box>
    </Box>
  );
};
