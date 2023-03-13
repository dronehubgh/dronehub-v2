import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

export const Programs = () => {
  return (
    <Box py="4rem" w="80%" mx="auto">
      <Box>
        <Heading my="3rem">Why Choose Our Drone Maintenance Program</Heading>
        <Text>
          Our primary goal is to ensure that your drone serves you in the best
          way possible. We carry out preventive maintenance services,
          inspection, and performance testing to ensure your drone is perfect
          for use.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap="20px"
        my="2rem"
      >
        <GridItem>
          <ProgramCard
            title="Official Maintenance Reports"
            description="Receive well-detailed maintenance reports to serve as a reference for past maintenance activities and future maintenance actions."
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Customised Programs"
            description="Have a unique maintenance need? No problem. We offer customized maintenance programs to suit your needs."
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Certified Technicians"
            description="Our technical consultants and maintenance technicians are qualified to properly handle and carry out maintenance work on drones. "
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Customer-Oriented Focus"
            description="It’s you first. You can be sure that we will listen to understand your request and be available to support you in the best way possible within an agreed time."
          />
        </GridItem>
      </Grid>
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        borderTopWidth="1px"
        borderBottomWidth={{ base: '0', lg: '1px' }}
        py="1rem"
      >
        <Step
          imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864620/donehub-assets/svg-icons/Group_16526_zrahm7.svg"
          text="Certified Drone Technicians"
        />

        <Step
          imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864681/donehub-assets/svg-icons/Group_16527_bzyiph.svg"
          text="Approved Maintenance Organization"
        />
        <Step
          imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864719/donehub-assets/svg-icons/Group_sssjrd.svg"
          text="Customer-Oriented Focus"
        />
        <Step
          imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864750/donehub-assets/svg-icons/Layer_1_s7sqmj.svg"
          text="Customised Drone Program"
        />
        <Step
          imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677864784/donehub-assets/svg-icons/Timely_Service_ixcgod.svg"
          text="Timely Service"
        />
      </Flex>
    </Box>
  );
};

interface IStepProps {
  imageUrl: string;
  text: string;
}

export const Step = ({ imageUrl, text }: IStepProps) => (
  <Flex
    gap="5px"
    align="center"
    mx="0.5rem"
    w="100%"
    borderRightWidth={{ base: '0', lg: '1px' }}
    borderBottomWidth={{ base: '1px', lg: '0' }}
    py={{ base: '1rem', lg: '0' }}
  >
    <Image boxSize="50px" src={imageUrl} alt="" />
    <Text fontSize="0.8rem" fontWeight="bold">
      {text}
    </Text>
  </Flex>
);

interface IProgramCardProps {
  title: string;
  description: string;
}
const ProgramCard = ({ title, description }: IProgramCardProps) => {
  return (
    <Box
      bgColor="#D7E9FE"
      p="2rem"
      bgImage="/assets/images/bg-overlay.svg"
      bgSize="cover"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text color="grey" my="0.5rem">
        {description}
      </Text>
    </Box>
  );
};
