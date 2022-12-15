import React, { ReactNode } from 'react';
import { Menu, MenuButton as ChakraMenuButton, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { btnStyles } from './_styles';

interface IMenuButtonProps {
  title: string;
  closeOnSelect: boolean;
  bgColor: string;
  color: string;
  children: ReactNode | JSX.Element;
}

export const MenuButton = ({
  title,
  children,
  closeOnSelect,
  bgColor,
  color,
}: IMenuButtonProps) => {
  return (
    <Menu closeOnSelect={closeOnSelect}>
      <ChakraMenuButton
        {...btnStyles}
        _active={{ backgroundColor: bgColor }}
        as={Button}
        bg={bgColor}
        color={color}
        rightIcon={<ChevronDownIcon />}
      >
        {title}
      </ChakraMenuButton>
      {children}
    </Menu>
  );
};

MenuButton.defaultProps = {
  title: 'Test',
  children: <></>,
  closeOnSelect: true,
  bgColor: 'brand.blue',
  color: 'white',
};
