import { Box } from '@chakra-ui/react';
import { Accessories } from './components/Accessories';
import { Contact } from '../../components';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { InTheBox } from './components/InTheBox';
import { Description } from './components/Description';
import { OtherProducts } from './components/OtherProducts';

export const ProductDetails = () => {
  return (
    <Box>
      <Header />
      <Gallery />
      <Box>
        <Description />
      </Box>
      <Contact />
      <InTheBox />
      <Accessories />
      <OtherProducts />
    </Box>
  );
};
