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
import { flexContainerStyles, formControlStyles } from './style';

export const GovernmentCorporation = () => {
  return (
    <Box my="2rem">
      <>
        <Text fontWeight="bold" py="1rem">
          Institution Info
        </Text>
        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="institution-name" fontWeight={'normal'}>
              Government Institution name
            </FormLabel>
            <Input id="institution-name" placeholder="Louisa" />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="country" fontWeight={'normal'}>
              Registered Country
            </FormLabel>

            <Select id="country" placeholder="Ghana" />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel htmlFor="other-issues" fontWeight={'normal'}>
            Registered Address
          </FormLabel>
          <Textarea
            id="other-issues"
            placeholder="Please fill inn your full address information"
          />
        </FormControl>

        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="company-website" fontWeight={'normal'}>
              Institution website
            </FormLabel>
            <Input
              id="company-website"
              placeholder="https://institution-site.com"
            />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="social-media-link" fontWeight={'normal'}>
              Social media link (one)
            </FormLabel>
            <Input
              id="social-media-link"
              placeholder="Eg. https://facebook.com/dronehub.ghana"
            />
          </FormControl>
        </Flex>

        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="contact-details" fontWeight={'normal'}>
              Contact Details
            </FormLabel>
            <Input id="contact-details" placeholder="+233 307585755" />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="other" fontWeight={'normal'}>
              Other
            </FormLabel>
            <Input id="other" placeholder="Any other information" />
          </FormControl>
        </Flex>
      </>
      <>
        <Text fontWeight="bold" py="1rem">
          Contact Details
        </Text>
        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              First name
            </FormLabel>
            <Input id="first-name" placeholder="Louisa" />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
              Last name
            </FormLabel>
            <Input id="last-name" placeholder="Doe" />
          </FormControl>
        </Flex>
        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Email
            </FormLabel>
            <Input id="email" placeholder="Louisa@dronehubgh.com" />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="phone-number" fontWeight={'normal'}>
              Phone number
            </FormLabel>
            <Input id="phone-number" placeholder="+233 746594876" />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel htmlFor="other-issues" fontWeight={'normal'}>
            Job Position
          </FormLabel>
          <Textarea id="other-issues" placeholder="Eg. Financial Officer" />
        </FormControl>
      </>
    </Box>
  );
};
