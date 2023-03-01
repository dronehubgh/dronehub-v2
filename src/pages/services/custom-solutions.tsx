import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const CustomSolutions: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Custom Solutions"
        description="Unique drone solutions for each project"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-18_mbxnv5.png"
        btnLabel="Send a Request"
      />
    </>
  );
};

export default CustomSolutions;
