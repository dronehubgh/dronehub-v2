import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { CustomMenuButton } from '../../../components';
import { commonPx } from '../../../consts';

export const Header = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  const styles: FlexProps = {
    w: '100%',
    h: '400px',
    bgColor: '#000813',
    bgImage: '/assets/images/bg-overlay.svg',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    py: { base: '4rem', lg: '2rem' },
    align: isLarge ? 'flex-end' : 'center',
    justify: isLarge ? 'space-between' : 'center',
    flexDir: isLarge ? 'row' : 'column',
    px: commonPx,
  };

  return (
    <Flex {...styles}>
      {!isLarge && (
        <Box my="2rem">
          <Navigation isLarge={isLarge} />
        </Box>
      )}

      <Box color="gray.100" textAlign={isLarge ? 'left' : 'center'}>
        <Heading size="xl">Mavic Mini</Heading>
        <Text fontSize="lg" mb="1rem">
          Fly As You Are
        </Text>
      </Box>
      <Flex>
        {isLarge && <Navigation isLarge={isLarge} />}
        <CustomMenuButton
          bgColor={isLarge ? 'transparent' : 'gray.100'}
          color={isLarge ? 'gray.100' : 'brand.blue'}
        />
      </Flex>
    </Flex>
  );
};

const Navigation = ({ isLarge }: { isLarge: boolean }) => (
  <Flex align="center">
    <NextLink
      className={`nav-item ${isLarge ? 'mx-4' : 'mx-2'} text-light`}
      href="#overview"
      passHref
    >
      Overview
    </NextLink>
    <NextLink
      className={`nav-item ${isLarge ? 'mx-4' : 'mx-2'} text-light`}
      style={{ minWidth: '80px' }}
      href="#techSpecs"
      passHref
    >
      Tech Specs
    </NextLink>
    <NextLink
      className={`nav-item ${isLarge ? 'mx-4' : 'mx-2'} text-light`}
      href="#applications"
      passHref
    >
      Applications
    </NextLink>
  </Flex>
);
