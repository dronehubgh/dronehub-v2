import { Box, Button, ButtonProps, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Assure } from './Assure';
import IntegrationProgram from './IntegrationProgram';

const btnStyles: ButtonProps = {
  fontWeight: 'bold',
  fontSize: { base: '0.7rem', lg: '0.9rem' },
  py: '1.5rem',
  borderColor: 'gray.100',
  borderWidth: '1px',
  color: 'gray.100',
  w: { base: '175px', lg: '300px' },
  bg: 'transparent',
  borderRadius: '0',
  _hover: { bg: '' },
  _active: { bg: '' },
};

export const EnterpriseFeature = () => {
  const router = useRouter();
  const query = router.query;

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (query?.type === 'assure') {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(0);
    }
  }, [query]);

  return (
    <Box>
      <Flex
        bg="brand.blue"
        minH="300px"
        pt="4rem"
        bgImage="/assets/images/bg-overlay.svg"
        align="flex-end"
        justify="center"
      >
        <Box>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="white"
            py="2rem"
            px="1rem"
          >
            Choose the right plan for your business
          </Text>

          <Flex justify="center">
            <Button
              {...btnStyles}
              bg={selectedIndex === 0 ? 'white' : 'transparent'}
              color={selectedIndex === 0 ? 'brand.blue' : 'white'}
              onClick={() => setSelectedIndex(0)}
            >
              Enterprise Integration Program
            </Button>
            <Button
              {...btnStyles}
              bg={selectedIndex === 1 ? 'white' : 'transparent'}
              color={selectedIndex === 1 ? 'brand.blue' : 'white'}
              onClick={() => setSelectedIndex(1)}
            >
              Enterprise Assure
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Box>
        {selectedIndex === 0 && <IntegrationProgram />}
        {selectedIndex === 1 && <Assure />}
      </Box>
    </Box>
  );
};

export { Banner as EnterpriseBanner } from './components/Banner';
