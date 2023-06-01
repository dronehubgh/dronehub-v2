import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { linkStyles } from './_styles';

export const ConnectWithUs = () => {
  return (
    <Flex align="center" justify="space-between" pb={5}>
      <Text color="#fff" fontWeight={700}>
        Connect with us
      </Text>

      <Flex fontSize="20px" pr={5}>
        <Link
          href="https://facebook.com/dronehub.ghana"
          isExternal
          {...linkStyles}
        >
          <Icon as={FaFacebookSquare} />
        </Link>

        <Link
          href="https://twitter.com/dronehubgh"
          isExternal
          px="30px"
          {...linkStyles}
        >
          <Icon as={FaTwitter} />
        </Link>

        <Link
          href="https://www.instagram.com/dronehubgh"
          isExternal
          {...linkStyles}
        >
          <Icon as={FaInstagram} />
        </Link>
      </Flex>
    </Flex>
  );
};
