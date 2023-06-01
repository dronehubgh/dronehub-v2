import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IconButton } from '../../components';

interface FieldDemoCardProps {
  colorScheme?: string;
}
export const ProductNewsCard = ({ colorScheme }: FieldDemoCardProps) => {
  return (
    <>
      <Card maxW="md" shadow="none" borderBottomWidth="2px" rounded="none">
        <CardBody>
          <Box
            w="100%"
            h="200px"
            bgColor={colorScheme || 'blue.500'}
            bgImage="/assets/images/bg-overlay.svg"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
          <Stack mt="6" spacing="3">
            <Heading size="md" maxW="90%">
              Product News | Zenmuse L1 LiDAR Solution Is Now Available at
              Dronehub
            </Heading>
            <Text fontSize="sm" color="gray.500">
              The Zenmuse L1 payload, DJI’s first fully integrated LiDAR
              solutionis now available at our Dronehub store.
            </Text>
          </Stack>

          <Text mt="2rem" fontSize="sm">
            June 2021 | News
          </Text>

          <IconButton
            title="Find out More"
            icon={<ChevronRightIcon />}
            w="fit-content"
            bgColor="brand.blue"
            color="white"
            px="2rem"
            size="sm"
            shadow="md"
            _active={{ bgColor: 'brand.blue' }}
          />
        </CardBody>
      </Card>
    </>
  );
};
