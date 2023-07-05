import {
  FlexProps,
  HeadingProps,
  InputProps,
  SelectProps,
  TextProps,
} from '@chakra-ui/react';
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react';
import { btnHeight } from '../../consts/consts';
import { ButtonProps } from '../Buttons/Button';

export const cardStyles: FlexProps = {
  bg: 'white',
  color: 'gray.800',
  bottom: { base: '0%', lg: '80%', md: '0%' },
  left: 0,
  right: 0,
  w: '100%',
  mx: 'auto',
  boxSizing: 'border-box',
  p: { base: '3rem', md: '6rem' },
  textAlign: 'center',
  align: 'center',
  justify: 'center',
  direction: 'column',
};

export const headingStyles: HeadingProps = {
  as: 'h3',
  mb: '2rem',
  fontSize: { base: 'lg', sm: '2xl', lg: '3xl' },
  fontWeight: 700,
};

export const selectStyles: SelectProps = {
  h: '45px',
  w: '100%',
  m: 1,
  fontSize: { base: '12px', md: '14px' },
  borderColor: 'brand.blue',
  color: 'brand.blue',
  fontWeight: 500,
};

export const inputStyles: InputProps = {
  m: 1,
  bg: 'white',
  h: '45px',
  borderColor: 'gray.500',
  w: '100%',
};

export const alertStyles: TextProps = {
  textAlign: 'center',
  fontSize: { base: '12px', lg: '14px', md: '12px' },
  fontWeight: '500',
  mt: '10',
};

export const submitBtnStyles: ButtonProps = {
  title: 'Subscribe',
  type: 'submit',
  w: '100%',
  h: btnHeight,
  bg: 'brand.blue',
  color: 'gray.100',
};
