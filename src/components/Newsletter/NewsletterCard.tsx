import { Flex, Heading, Text } from '@chakra-ui/react';
import { NewsletterForm } from './NewsletterForm';
import { alertStyles, cardStyles, headingStyles } from './_styles';

export const Newsletter = () => {
  return (
    <Flex {...cardStyles}>
      <Heading {...headingStyles}>
        Get personalized updates on industry innovations and free digital assets
      </Heading>
      <NewsletterForm />
      <Text {...alertStyles}>
        By submitting your information, you are agreeing to receive news,
        surveys, and special offers from Dronehub Ghana Limited. Terms and
        Conditions, Privacy Policy
      </Text>
    </Flex>
  );
};
