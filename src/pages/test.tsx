import { Box, Text } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { IconButton } from '../components/Buttons/IconButton';
import { MenuButton } from '../components/Buttons/MenuButton';
import { ReserveNowMenu } from '../components/ReserveNowMenu/Menu';
import { ProductCard, ProductCTAButtons } from '../features';

const Test = () => {
  return (
    <Box bg="blue.200" pb="3rem">
      <Text fontSize="3xl" textAlign={'center'}>
        Test Environment
      </Text>
      <Box>
        <ProductCard
          cta={<ProductCTAButtons />}
          imageUrl="./assets/images/drones/drone-2.png"
        />

        <br />
        <Box textAlign="center">
          <IconButton title="Reserve Now" icon={<BiChevronDown />} />
          <br />
          <MenuButton />
          <ReserveNowMenu />
        </Box>

        <br />
      </Box>

      {/* <Box w="90%" p="20px" position="relative">
        <Newsletter />
      </Box> */}
      {/* <ProductSlider /> */}

      {/* <Box>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Test;
