import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { flexContainerStyles, formControlStyles } from './style';

export const Suggestion = () => {
  return (
    <Box my="2rem">
      <Flex {...flexContainerStyles}>
        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="contact-person" fontWeight={'normal'}>
            Contact Person
          </FormLabel>
          <Input id="contact-person" placeholder="Louisa" />
        </FormControl>

        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="country" fontWeight={'normal'}>
            Country
          </FormLabel>
          <Select id="country" placeholder="Ghana" />
        </FormControl>
      </Flex>
      <Flex {...flexContainerStyles}>
        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="email" fontWeight={'normal'}>
            Email
          </FormLabel>
          <Input id="email" placeholder="louisa@dronehubgh.com" />
        </FormControl>

        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="country" fontWeight={'normal'}>
            Phone number
          </FormLabel>
          <Input id="country" placeholder="+233-98760004994" />
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel htmlFor="description" fontWeight={'normal'}>
          Description
        </FormLabel>
        <Textarea id="description" placeholder="Kindly type here" />
      </FormControl>

      <Text my="2rem" fontSize="sm">
        NB: We will not disclose any of the above information.
      </Text>
    </Box>
  );
};
