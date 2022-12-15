import { ButtonProps, MenuItemProps } from '@chakra-ui/react';

export const btnStyles: ButtonProps = {
  _hover: { boxShadow: 'md' },
  fontWeight: 500,
  color: 'brand.blue',
  borderRadius: '5px',
  borderWidth: 1,
  borderColor: 'gray.300',
  w: { base: '100%', md: '160px' },
  h: '45px',
  fontSize: { base: '12px', md: '14px' },
  my: 2,
  bg: 'white',
  variant: 'outline',
  mx: 1,
};

export const menuItemStyles: MenuItemProps = {
  as: 'a',
  _hover: { color: 'brand.blue', cursor: 'pointer' },
};
