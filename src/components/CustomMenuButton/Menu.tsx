import React from 'react';
import { Box, Button, ButtonProps, Spacer, Text } from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { IMenuItem } from '../../models/app';
import { v4 as uid } from 'uuid';
import { btnStyles } from '..';
import { MenuItem } from './MenuItem';

interface IReserveNowMenuButtonProps extends ButtonProps {
  title?: string;
}

export const CustomMenuButton = ({
  title,
  ...rest
}: IReserveNowMenuButtonProps) => {
  return (
    <Box className="dropdown" w="100%">
      <Button
        {...btnStyles}
        className="dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        minW="120px"
        {...rest}
      >
        <Text as="span" mx="1">
          {title}
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

CustomMenuButton.defaultProps = {
  title: 'Reserve now',
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
