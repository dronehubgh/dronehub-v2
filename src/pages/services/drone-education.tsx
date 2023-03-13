import { NextPage } from 'next';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';
import {
  Details,
  Programs,
  WhoCanBenefit,
} from '../../features/services/drone-education';

const DroneEducation: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Drone Education"
        description="Want to enhance your skills? Let us show you how."
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-13_df8bxd.png"
        cta={
          <CustomMenuButton
            title="Book now"
            bgColor="white"
            color="brand.blue"
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />

      <Details />
      <WhoCanBenefit />
      <Programs />
      <ConnectWithUs description="Enroll in any of our drone programs today!" />
    </>
  );
};

export default DroneEducation;
