import { Box, Button, Text } from '@chakra-ui/react';
import React, { Dispatch } from 'react';

interface InitialMessageProps {
  setAgreed: Dispatch<React.SetStateAction<boolean>>;
}
export const InitialMessage = ({ setAgreed }: InitialMessageProps) => {
  return (
    <>
      <Text lineHeight="2rem">
        Thank you for your consideration in doing business with us. As we strive
        to provide the best customer service experience, we appreciate your
        comments and suggestions. To help us do better, please take a moment to
        leave us feedback. The information provided is strictly confidential.
      </Text>
      <Text py="2rem">Thank you.</Text>

      <Box textAlign="right">
        <Button
          bgColor="brand.blue"
          color="white"
          rounded="sm"
          shadow="md"
          px="2rem"
          _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
          _active={{ bgColor: 'brand.blue' }}
          onClick={() => setAgreed(true)}
        >
          I want to give my feedback
        </Button>
      </Box>
    </>
  );
};
