import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export const Overview = () => {
  return (
    <Box bgColor="brand.darkBlue" my="4rem" py="4rem">
      <Box w={{ base: '90%', lg: '80%' }} mx="auto">
        <Heading
          textAlign={{ base: 'center', lg: 'left' }}
          color="white"
          py="2rem"
        >
          Overview
        </Heading>

        <Flex
          gap="30px"
          align={{ base: 'center', lg: 'stretch' }}
          flexDir={{ base: 'column', lg: 'row' }}
          mb="2rem"
        >
          <Card maxW="sm" bgColor="white">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677862479/donehub-assets/Maintenance_q1y6za.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Preventive Maintenance</Heading>
                <Text>
                  A proactive approach involving periodic maintenance and
                  servicing to prevent minor issues from becoming more
                  significant problems.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>

          <Card maxW="sm" bgColor="white">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677862479/donehub-assets/technical_support_hnw467.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Technical Support</Heading>
                <Text>
                  Remote & onsite technical support to reduce operational
                  downtime and get tasks completed.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Flex>
      </Box>
    </Box>
  );
};
