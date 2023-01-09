import { Box } from '@chakra-ui/react';
import { Accessories } from './components/Accessories';
import Contact from './components/Contact';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { InTheBox } from './components/InTheBox';

export const ProductDetails = () => {
  return (
    <Box w="fit-content">
      <Header />
      <Gallery />
      <Contact />
      <Box>
        <InTheBox />
        <Accessories />
      </Box>
    </Box>
  );
};
