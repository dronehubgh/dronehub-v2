import { Box, Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Complaint } from './Complaint';
import { Suggestion } from './Suggestion';

export const FeedbackForm = () => {
  const [value, setValue] = useState('1');

  return (
    <>
      <Text fontWeight="bold" py="1rem">
        Choose feedback type
      </Text>
      <RadioGroup onChange={setValue} value={value}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 3, lg: 8 }}
        >
          <Radio value="1">Complaint</Radio>
          <Radio value="2">Suggestion</Radio>
        </Stack>
      </RadioGroup>

      {value === '1' ? <Complaint /> : <Suggestion />}
    </>
  );
};
