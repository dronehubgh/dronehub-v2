import { ProductDetails } from '../../features';
import { client } from '../../lib';
import { productQuery } from '../../queries';

type Props = {
  product: any;
};

export default function ProductDetailsPage({ product }: Props) {
  return <ProductDetails product={product} />;
}

type SSProps = {
  query: {
    slug: string;
  };
};
export const getServerSideProps = async ({ query: { slug } }: SSProps) => {
  const product: any = await client.fetch(productQuery, { slug });
  return {
    props: { product },
  };
};
