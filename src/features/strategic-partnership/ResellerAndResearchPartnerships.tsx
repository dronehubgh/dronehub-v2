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

export const ResellerAndResearchPartnerships = () => {
  return (
    <Box my="2rem">
      <>
        <Text fontWeight="bold" py="1rem">
          Company Info
        </Text>
        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="company-name" fontWeight={'normal'}>
              Company name
            </FormLabel>
            <Input id="company-name" placeholder="Louisa" />
          </FormControl>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="tax-number" fontWeight={'normal'}>
              Tax number
            </FormLabel>
            <Input id="tax-number" placeholder="75675873937" />
          </FormControl>
        </Flex>
        <Flex {...flexContainerStyles}>
          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="business-address" fontWeight={'normal'}>
              Business Address
            </FormLabel>
            <Input id="business-address" placeholder="achimota, accra" />
          </FormControl>

          <FormControl {...formControlStyles}>
            <FormLabel htmlFor="country" fontWeight={'normal'}>
              Country
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
              Company website
            </FormLabel>
            <Input id="company-website" placeholder="https://mycompany.com" />
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

      <>
        <Text fontWeight="bold" pb="1rem" pt="3rem">
          Industry Vertical
        </Text>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Choose industry you belong
          </FormLabel>
          <Select id="country" placeholder="Ghana" />
        </FormControl>
      </>

      <>
        <Text fontWeight="bold" pb="0.5rem" pt="3rem">
          Comment / Message
        </Text>
        <Textarea id="other-issues" placeholder="Kindly type here" />
      </>
    </Box>
  );
};
