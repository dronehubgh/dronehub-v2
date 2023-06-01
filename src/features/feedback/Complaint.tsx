import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import { flexContainerStyles, formControlStyles } from './style';

export const Complaint = () => {
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
          <FormLabel htmlFor="phone-number" fontWeight={'normal'}>
            Phone number
          </FormLabel>
          <Input id="phone-number" placeholder="+233-98760004994" />
        </FormControl>
      </Flex>
      <Flex {...flexContainerStyles}>
        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="service-issue" fontWeight={'normal'}>
            Service Issue
          </FormLabel>

          <Select
            id="service-issue"
            placeholder="Drone purchase, Rental, Customer service"
          />
        </FormControl>

        <FormControl {...formControlStyles}>
          <FormLabel htmlFor="technical-issue" fontWeight={'normal'}>
            Technical Support Issue
          </FormLabel>
          <Select
            id="technical-issue"
            placeholder="Repair, Maintenance, Product Issue"
          />
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel htmlFor="other-issues" fontWeight={'normal'}>
          Other Issues
        </FormLabel>
        <Textarea id="other-issues" placeholder="Kindly type here" />
      </FormControl>

      <Text my="2rem" fontSize="sm">
        NB: We will not disclose any of the above information.
      </Text>
    </Box>
  );
};
