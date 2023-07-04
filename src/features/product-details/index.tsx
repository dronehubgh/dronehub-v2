import { Box } from '@chakra-ui/react';
import { Accessories } from './components/Accessories';
import { Contact } from '../../components';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { InTheBox } from './components/InTheBox';
import { Description } from './components/Description';
import { OtherProducts } from './components/OtherProducts';

export const ProductDetails = ({ product }: any) => {
  const {
    title,
    tagline,
    mainImage,
    gallery,
    inBox,
    accessories,
    recommended,
    application,
    overview,
    summary,
    extra,
  } = product;

  return (
    <Box>
      <Header title={title} tagline={tagline} />
      <Gallery mainImageUrl={mainImage} gallery={gallery} />
      <Box>
        <Description
          application={application}
          extra={extra}
          overview={overview}
          summary={summary}
        />
      </Box>
      <Contact />
      {inBox && <InTheBox inBox={inBox} />}
      {accessories && (
        <Accessories productName={title} accessories={accessories} />
      )}
      {recommended && <OtherProducts recommended={recommended} />}
    </Box>
  );
};
