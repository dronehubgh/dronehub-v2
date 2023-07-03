import { BlogDetails } from '../../features/blog/BlogDetails/BlogDetails';
import { client } from '../../lib';
import { IBlogArticle } from '../../models/app';
import { blogDetailsQuery } from '../../queries';

type Props = {
  article: IBlogArticle;
};

export default function ProductDetailsPage({ article }: Props) {
  return <BlogDetails article={article} />;
}

type SSProps = {
  query: {
    slug: string;
  };
};
export const getServerSideProps = async ({ query: { slug } }: SSProps) => {
  const article: IBlogArticle[] = await client.fetch(blogDetailsQuery, {
    slug,
  });
  return {
    props: { article: article[0] },
  };
};
