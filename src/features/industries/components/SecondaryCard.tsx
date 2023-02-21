import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IIndustryCardDetails } from '../model';

type Direction = 'row' | 'row-reverse';

interface SecondaryCardProps extends IIndustryCardDetails {
  index: number;
}
export const SecondaryCard = ({
  index,
  title,
  description,
  imageUrl,
}: SecondaryCardProps) => {
  const [dir, setDir] = useState<Direction>('row');

  useEffect(() => {
    const direction: Direction = index % 2 !== 0 ? 'row-reverse' : 'row';
    setDir(direction);
  }, [index]);

  return (
    <Card
      direction={{ base: 'column', lg: dir }}
      align="center"
      overflow="hidden"
      variant="outline"
      my="2rem"
    >
      <Image
        objectFit="cover"
        objectPosition="center"
        maxW={{ base: '100%', lg: '50%' }}
        src={imageUrl}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
