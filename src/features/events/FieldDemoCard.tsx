import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IconButton } from '../../components';
import { FieldDemoModal } from './FieldDemoModal';

interface FieldDemoCardProps {
  colorScheme?: string;
}
export const FieldDemoCard = ({ colorScheme }: FieldDemoCardProps) => {
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
              Community | Free Drone Info Session for Students
            </Heading>
            <Text fontSize="sm" color="gray.500">
              A free and comprehensive drone info session specially designed for
              students to learn about innovative future opportunities in an
              entertaining way.
            </Text>
          </Stack>
          <Box fontWeight="bold" mt="2rem" fontSize="sm">
            <Text my="1rem">Proposed Date: TBA</Text>
            <Text my="1rem">Status: Available to Book</Text>
            <Text my="1rem">Location: Greater Accra Region, Ghana</Text>
          </Box>

          <FieldDemoModal />
        </CardBody>
      </Card>
    </>
  );
};
