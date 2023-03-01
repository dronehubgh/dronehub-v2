import { Flex, FlexProps } from '@chakra-ui/react';

const cardProps: FlexProps = {
  justify: 'center',
  align: 'center',
  minW: '50%',
  minH: '150px',
  fontWeight: 'bold',
  px: '2rem',
  textAlign: 'center',
  color: 'gray.100',
  bgColor: '#0645A4',
  mx: 'auto',
};

export const SoftwareIssues = () => {
  return <Flex {...cardProps}>Firmware Issues</Flex>;
};
