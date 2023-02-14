import React from 'react';
import { Box, Button, ButtonProps, Spacer, Text } from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { IMenuItem } from '../../models/app';
import { v4 as uid } from 'uuid';
import { btnStyles } from '..';
import { MenuItem } from './MenuItem';

interface IReserveNowMenuButtonProps {
  bgColor?: string;
  color?: string;
  restStyles?: ButtonProps;
}

export const ReserveNowMenu = ({
  bgColor,
  color,
  restStyles,
}: IReserveNowMenuButtonProps) => {
  return (
    <Box className="dropdown">
      <Button
        {...btnStyles}
        className="dropdown-toggle"
        // _hover={{ bg: bgColor, color, shadow: 'md' }}
        // _active={{ bg: bgColor, color }}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        {...restStyles}
      >
        <Text as="span" mx="1">
          Reserve now
        </Text>{' '}
        <BiChevronDown />
      </Button>

      <Box as="ul" className="dropdown-menu dropdown-menu-end">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </Box>
    </Box>
  );
};

ReserveNowMenu.defaultProps = {
  bgColor: 'brand.blue',
  color: 'gray.100',
};

const menuItems: IMenuItem[] = [
  {
    id: uid(),
    title: 'By Call',
    link: 'tel: +233 (0) 55 446 0012',
    icon: <FaPhoneAlt />,
  },
  {
    id: uid(),
    link: 'mailto:  connect@dronehubgh.com',
    title: 'By Mail',
    icon: <FaEnvelope />,
  },
];
