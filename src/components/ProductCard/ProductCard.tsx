import { Box, Flex, FlexProps, Heading, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ProductCTAButtons } from '..';
import { IProductOverview } from '../../models/app';
import {
  cardStyles,
  headingStyles,
  imageBoxStyles,
  textStyles,
} from './_styles';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  cta: ReactNode;
  outOfStock?: boolean;
  link: string;
  restStyles?: IOverrides;
}

export interface IOverrides {
  image?: FlexProps;
  card?: FlexProps;
}

export const ProductCard = ({
  title,
  description,
  imageUrl,
  outOfStock,
  restStyles,
  link,
}: ProductCardProps) => {
  return (
    <Flex {...cardStyles} {...restStyles?.card}>
      <Box>
        <Heading {...headingStyles}>{title}</Heading>
        <Text {...textStyles}>{description}</Text>
        <Box my="0.6rem">
          {outOfStock ? (
            <p className="text-danger fw-bold fst-italic">Out of Stock</p>
          ) : (
            <ProductCTAButtons
              btn1Link={link}
              btn2Styles={{ bg: 'brand.blue', color: 'gray.100' }}
            />
          )}
        </Box>
      </Box>
      <Flex {...imageBoxStyles} {...restStyles?.image}>
        <Image src={imageUrl} alt="product image" h="100%" mx="auto" />
      </Flex>

      {outOfStock && (
        <Box
          bgColor="gray.900"
          pos="absolute"
          bottom="0"
          left="0"
          w="100%"
          p="2rem"
          opacity="0.65"
          color="gray.100"
          className="fst-italic"
        >
          Drone shown is currently not available for sale. Kindly contact us for
          more information on the drone here
        </Box>
      )}
    </Flex>
  );
};

ProductCard.defaultProps = {
  title: 'Card Title',
  description: 'Lorem ipsum dolor sit amet consectetur',
  imageUrl: '',
  cta: <></>,
  outOfStock: false,
  link: '/products/ab67c-437868-abc573-67bac',
};

export const generateProductCards = (
  items: IProductOverview[],
  restStyles?: IOverrides
): ReactNode[] => {
  return items.map((item) => (
    <ProductCard
      link={item.link}
      key={item.id}
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      outOfStock={item.outOfStock}
      restStyles={restStyles}
    />
  ));
};
