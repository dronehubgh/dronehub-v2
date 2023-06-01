import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import { FeedbackForm } from './FeedbackForm';
import { InitialMessage } from './InitialMessage';

export const Feedback = () => {
  const [agreed, setAgreed] = useState<boolean>(false);

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
            Feedback
          </Heading>
        </Box>
      </Flex>

      <Box my="2rem" p="2rem" w={{ base: '100%', lg: '90%' }} mx="auto">
        <Card size="sm" p="2rem" maxW="60rem" mx="auto">
          <CardHeader display="flex" justifyContent="space-between">
            <Heading size="md">
              {!agreed
                ? 'Your feedback Matters - We love to hear from you'
                : 'Tell us about your experience'}
            </Heading>
            {agreed && (
              <Button
                variant="ghost"
                color="brand.blue"
                onClick={() => setAgreed(false)}
              >
                <CloseIcon />
              </Button>
            )}
          </CardHeader>

          <CardBody>
            {!agreed ? (
              <InitialMessage setAgreed={setAgreed} />
            ) : (
              <>
                <FeedbackForm />
                <ConfirmationModal setAgreed={setAgreed} />
              </>
            )}
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};
