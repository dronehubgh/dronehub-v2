import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { AllServicesLarge } from './AllServices_lg';
import { AllServicesSmall } from './AllServices_sm';

export const AllServices = () => {
  const [md] = useMediaQuery('(min-width: 992px)');

  return <>{md ? <AllServicesLarge /> : <AllServicesSmall />}</>;
};
