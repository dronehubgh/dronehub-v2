import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';

interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

export const IconButton = ({ title, icon, ...rest }: IconButtonProps) => (
  <Button title={title} {...rest}>
    <Box as="span" mx="1">
      {icon}
    </Box>
  </Button>
);
