import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import { EducationalPartnerships } from './EducationalPartnerships';
import { GovernmentCorporation } from './GovernmentCorporation';
import { ResellerAndResearchPartnerships } from './ResellerAndResearchPartnerships';

const partnerships = [
  {
    value: '1',
    label: 'Reseller / Sub dealer, Manufacturer',
  },
  {
    value: '2',
    label: 'Educational',
  },

  {
    value: '3',
    label: 'Governmennt Cooperation',
  },
];

export const StrategicPartnership = () => {
  const [selectedPartnership, setSelectedPartnership] = useState<string>('1');

  return (
    <Box>
      <Flex
        bg="brand.blue"
        minH="300px"
        pt="4rem"
        bgImage="/assets/images/bg-overlay.svg"
        align="flex-end"
        justify="center"
      >
        <Box>
          <Heading fontWeight="bold" color="white" py="2rem" px="1rem">
            Strategic Partnerships
          </Heading>
        </Box>
      </Flex>

      <Box my="2rem" p="2rem" w={{ base: '100%', lg: '90%' }} mx="auto">
        <Card size="sm" p="2rem" maxW="60rem" mx="auto">
          <CardHeader display="flex" justifyContent="space-between">
            <Heading size="md">Partner with us</Heading>
          </CardHeader>

          <CardBody>
            <Text fontWeight="bold" py="1rem">
              Area of Interest
            </Text>
            <FormControl>
              <FormLabel htmlFor="contact-person" fontWeight={'normal'}>
                What’s your area of interest
              </FormLabel>
              <Select
                placeholder="Select Area of Interest"
                value={selectedPartnership}
                onChange={(e) => setSelectedPartnership(e.target.value)}
              >
                {partnerships.map((partnership) => (
                  <option key={partnership.value} value={partnership.value}>
                    {partnership.label}
                  </option>
                ))}
              </Select>
            </FormControl>

            {selectedPartnership === '1' && <ResellerAndResearchPartnerships />}
            {selectedPartnership === '2' && <EducationalPartnerships />}
            {selectedPartnership === '3' && <GovernmentCorporation />}

            <Box my="2rem">
              <Checkbox defaultChecked my="1rem">
                By sending this form I agree to the{' '}
                <Link href="/privacy-policy">
                  <Text as="span" color="brand.blue">
                    Privacy Policy.
                  </Text>
                </Link>
              </Checkbox>
              <Text mb="2rem">
                Yes, please keep me updated on Dronehub news, products, services
                and events. I can cancel my subscription at any time.
              </Text>

              <ConfirmationModal />
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};
