import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { IIndustryCardDetails } from '../model';

export const PrimaryCard = ({
  title,
  description,
  imageUrl,
}: IIndustryCardDetails) => {
  return (
    <Card minW="xs" my="1rem">
      <CardBody>
        <Image src={imageUrl} alt={title} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
