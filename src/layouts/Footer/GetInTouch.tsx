import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { linkStyles } from './_styles';

export const GetInTouch = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: '16px' }}
        color="white"
        fontWeight="300"
        mt={4}
        mb={{ base: 10 }}
      >
        H/No. 60 Co-Operative Building, Opposite Glico Insurance, Kwame Nkrumah
        Avenue, Adabraka, Greater Accra, Ghana GA-075-8188
      </Text>
      <Box mt={{ md: 6 }} color="white">
        <Flex mb={{ base: 5 }}>
          <Icon as={BiPhone} boxSize={5} />
          <Box ml={3}>
            <Link href="tel:+233554460012" {...linkStyles}>
              +233 (0) 55 446 0012
            </Link>
            <br />
            <Link href="tel:+233554460055" {...linkStyles}>
              +233 (0) 55 446 0055
            </Link>
          </Box>
        </Flex>

        <Flex align="center" mb={{ base: 5 }}>
          <Icon as={FiMail} boxSize={5} />
          <Link
            ml={3}
            fontSize={{ base: '16px' }}
            color="white"
            href="mailto: connect@dronehubgh.com"
            _hover={{ color: 'gray.300' }}
          >
            connect@dronehubgh.com
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
