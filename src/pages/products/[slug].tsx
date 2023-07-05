import { ProductDetails } from '../../features';
import { client } from '../../lib';
import { productQuery } from '../../queries';
import ErrorPage from 'next/error';

type Props = {
  product: any;
};

export default function ProductDetailsPage({ product }: Props) {
  return (
    <>
      {product == null ? (
        <ErrorPage statusCode={404} />
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  );
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
