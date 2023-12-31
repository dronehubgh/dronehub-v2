import { ButtonProps, MenuItemProps } from '@chakra-ui/react';
import { btnHeight } from '../../consts/consts';

export const btnStyles: ButtonProps = {
  _hover: { boxShadow: 'md' },
  fontWeight: 500,
  color: 'brand.blue',
  borderRadius: '5px',
  borderWidth: 1,
  borderColor: 'gray.300',
  w: '100%',
  h: btnHeight,
  fontSize: { base: '12px', md: '14px' },
  my: 2,
  bg: 'white',
  variant: 'outline',
};

export const menuItemStyles: MenuItemProps = {
  as: 'a',
  _hover: { color: 'brand.blue', cursor: 'pointer' },
};
