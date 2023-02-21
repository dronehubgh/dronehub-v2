import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { PrimaryCard, SecondaryCard } from '../features';
import { IIndustryCardDetails } from '../features/industries/model';
import { v4 as uid } from 'uuid';

export interface IndustryApplicationsSectionProps {
  industryName: string;
  description?: string;
  primaryDetails: IIndustryCardDetails[];
  secondaryDetails: IIndustryCardDetails[];
}

export const IndustryApplicationsSection = ({
  industryName,
  description,
  primaryDetails = [],
  secondaryDetails = [],
}: IndustryApplicationsSectionProps) => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx="auto">
      <Box>
        <Text
          py="1rem"
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight="bold"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Drone Applications in {industryName}
        </Text>
        <Text>{description}</Text>
      </Box>
      <Flex gap="2rem" flexDir={{ base: 'column', lg: 'row' }} my="2rem">
        <PrimaryCard {...primaryDetails[0]} />
        <PrimaryCard {...primaryDetails[1]} />
      </Flex>
      <Box my="2rem">
        {secondaryDetails.map((info, index) => (
          <SecondaryCard
            key={uid()}
            index={index + 1}
            title={info.title}
            description={info.description}
            imageUrl={info.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
};
