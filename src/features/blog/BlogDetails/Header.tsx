import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { commonPx } from '../../../consts';

interface IHeaderProps {
  title: string;
  tagline: string;
}
export const Header = ({ title, tagline }: IHeaderProps) => {
  const styles: FlexProps = {
    w: '100%',
    h: '500px',
    bgColor: '#011127',
    bgImage: '/assets/images/bg-overlay.svg',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    py: { base: '4rem', lg: '2rem' },
    align: 'center',
    justify: 'center',
    px: commonPx,
  };

  return (
    <Flex {...styles}>
      <Box color="gray.100" textAlign="center">
        <Heading size="xl">{title}</Heading>
        <Text fontSize="lg" my="1rem">
          {tagline}
        </Text>
      </Box>
    </Flex>
  );
};
