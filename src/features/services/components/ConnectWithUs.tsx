import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { CustomMenuButton } from '../../../components';

interface IConnectWithUsProps extends BoxProps {
  heading?: string;
  description: string;
}

export const ConnectWithUs = ({
  heading,
  description,
  ...rest
}: IConnectWithUsProps) => {
  return (
    <Box bg="brand.darkBlue" {...rest}>
      <Flex
        align="center"
        h={{ base: '', lg: '650px' }}
        flexDir={{ base: 'column', lg: 'row' }}
        overflow="hidden"
      >
        <Box p={{ base: '2rem', lg: '4rem' }} w={{ base: '90%', lg: '50%' }}>
          <Heading size={{ base: 'lg', md: 'xl' }} color="white">
            {heading || 'Connect with us'}
          </Heading>
          <Text fontSize="1.2rem" w="90%" my="1rem" color="gray.300">
            {description}
          </Text>
          <Flex
            gap="0.5rem"
            w={{ lg: '80%' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <CustomMenuButton
              title="Book now"
              w={{ base: '100px', lg: '200px' }}
            />
          </Flex>
        </Box>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          justify={{ base: 'center', lg: 'flex-end' }}
        >
          <Box
            className="focus-section-design"
            w={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            h={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            borderStyle="solid"
            borderColor="background: rgba(6, 69, 164, 0.05)"
            borderRadius="100%"
            mb={{ base: '1rem', lg: '0' }}
            bg="center / contain no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676723169/donehub-assets/consult_1_hfhp7x.png)"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
