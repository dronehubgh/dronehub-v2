import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const DroneEducation: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Education"
        description="Want to enhance your skills? Let us show you how."
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-13_df8bxd.png"
        btnLabel="Book now"
      />
    </>
  );
};

export default DroneEducation;
