import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ProductCTAButtons } from '../Buttons/ProductCTAButtons';
import {
  cardStyles,
  headingStyles,
  imageBoxStyles,
  textStyles,
} from './_styles';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceCard = ({
  title,
  description,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <Flex {...cardStyles}>
      <Flex
        {...imageBoxStyles}
        bg={`center / cover no-repeat url(${imageUrl})`}
      />
      <Box bg="#011127" color="gray.100" p="1rem">
        <Text {...headingStyles}>{title}</Text>
        <Text {...textStyles}>{description}</Text>
        <Box my="0.6rem">
          <ProductCTAButtons
            btn1Styles={{ borderColor: 'gray.100', color: 'gray.100' }}
            btn2Styles={{ bg: 'gray.100', color: 'brand.blue' }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

ServiceCard.defaultProps = {
  title: 'Card Title',
  description: 'Lorem ipsum dolor sit amet consectetur',
  imageUrl: '',
};
