import { NextPage } from 'next';
import React from 'react';
import { ServiceHeroBanner } from '../../features';

const DroneMaintenance: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Maintenance & Technical Support"
        description="Top-level maintenance to keep your drone airworthy"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-23_sq5q1s.png"
        btnLabel="Book now"
      />
    </>
  );
};

export default DroneMaintenance;
