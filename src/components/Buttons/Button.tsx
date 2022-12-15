import React, { ReactNode } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraBtnProps,
} from '@chakra-ui/react';
import { btnStyles } from './_styles';

export interface ButtonProps extends ChakraBtnProps {
  title: string;
  children?: ReactNode;
}

export const Button = ({ title, children, ...rest }: ButtonProps) => (
  <ChakraButton {...btnStyles} {...rest}>
    {title} {children}
  </ChakraButton>
);
