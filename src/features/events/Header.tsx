import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export const EventsHeader = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  const styles: FlexProps = {
    w: '100%',
    h: '400px',
    bgColor: '#000813',
    bgImage: '/assets/images/bg-overlay.svg',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    align: 'center',
    justify: 'center',
  };

  return (
    <Flex {...styles}>
      <Box color="gray.100" textAlign="center">
        <Heading size="xl">Dronehub Events</Heading>
        <Text fontSize="lg" my="1rem">
          Get to know the latest happenings at Dronehub
        </Text>
      </Box>
    </Flex>
  );
};
