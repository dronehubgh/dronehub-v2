import React from 'react';
import { Contact, OurServices } from '../../components';
import { Categories } from '../../components/Categories';
import { AllDeals, DealsCarousel } from '../../features';
import { getProductCategories } from '../../functions/data-formatters';
import { client } from '../../lib';
import { ISanityProductCategory } from '../../models';
import { IProductCategory } from '../../models/app';

interface IDealsPageProps {
  categories: IProductCategory[];
}

const excludedCategories = ['Cameras & Gimbals', 'Software', 'Others'];

const DealsPage = ({ categories }: IDealsPageProps) => {
  return (
    <>
      <DealsCarousel />
      <Categories
        categories={categories.filter(
          (category) => !excludedCategories.includes(category.name)
        )}
      />
      <AllDeals />
      <OurServices />
      <Contact />
    </>
  );
};

export default DealsPage;

export const getServerSideProps = async () => {
  const query = '*[_type == "category"]';
  const res: ISanityProductCategory[] = await client.fetch(query);
  const categories = getProductCategories(res);

  return {
    props: { categories },
  };
};
