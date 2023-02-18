import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { FrequentlyAskedQuestions, IconButton } from '../../components';
import { InfoCard } from './components/InfoCard';
import { TalkToConsultant } from './components/TalkToConsultant';

const IntegrationProgram = () => {
  return (
    <Box w="100%" mb="4rem">
      <Flex mb="4rem" justify="center" flexDir={{ base: 'column', lg: 'row' }}>
        <Box
          w={{ base: '350px', lg: '300px' }}
          borderWidth="1px"
          borderColor="gray.100"
          mx={{ base: 'auto', lg: '0' }}
          p="1.5rem"
        >
          <Text fontWeight="bold" borderBottomWidth="1px" pb="0.5rem">
            Basic
          </Text>
          <IconButton
            icon={<FaChevronRight size="0.5rem" />}
            title="Get Started"
            fontSize="0.8rem"
            bgColor="brand.blue"
            color="gray.100"
            my="1rem"
            _active={{ bgColor: '' }}
          />
          <Flex>
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Basic bi-annual preventative drone maintenance and servicing. This
              includes:
              <UnorderedList mt="0.6rem">
                <ListItem>
                  Structural and functional assessment including parts
                  inspection,
                </ListItem>
                <ListItem>Updates and calibration, and</ListItem>
                <ListItem>Routine detailed cleaning.</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Handover training and safety guidance for operator’s staff.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Handover training and safety guidance for operator’s
              staff.One-time assistance to register the drone with the
              regulator. This covers small drones only.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>12-month access to dedicated remote technical support.</Box>
          </Flex>
        </Box>
        <Box
          w={{ base: '350px', lg: '300px' }}
          borderWidth="1px"
          borderColor="gray.100"
          mx={{ base: 'auto', lg: '0' }}
          p="1.5rem"
        >
          <Text fontWeight="bold" borderBottomWidth="1px" pb="0.5rem">
            Advanced
          </Text>
          <IconButton
            icon={<FaChevronRight size="0.5rem" />}
            title="Get Started"
            fontSize="0.8rem"
            bgColor="brand.blue"
            color="gray.100"
            my="1rem"
            _active={{ bgColor: '' }}
          />
          <Flex>
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Advanced bi-annual preventative drone maintenance and servicing.
              This includes:
              <UnorderedList mt="0.6rem">
                <ListItem>
                  Structural and functional assessment including parts
                  inspection,
                </ListItem>
                <ListItem>Updates and calibration,</ListItem>
                <ListItem>Routine detailed cleaning, and</ListItem>
                <ListItem>Replacement of easily worn out parts.</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Handover training and safety guidance for operator’s staff.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              One-time assistance to register the drone with the regulator. This
              covers small, light and large drones.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              12-month access to dedicated and onsite technical support.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>Drone operator guide and logbook.</Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              One-time drone operations quality improvement and assessment
              service.
            </Box>
          </Flex>
          <Flex my="1rem">
            <Box fontSize="0.8rem" pr="1rem" color="brand.blue">
              <CheckIcon />
            </Box>
            <Box>
              Access to our drone consulting services by industry segment for an
              agreed period.
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        bgColor="rgba(255, 170, 0, 0.2)"
        bgImage="/assets/images/bg-overlay.svg"
        h="300px"
        justify="center"
        align="center"
        px="2rem"
        textAlign="center"
      >
        Our enterprise integration program is designed to support businesses
        <br /> to seamlessly integrate drone technology into their work
        operations.
      </Flex>

      <Text my="4rem" w="80%" mx="auto">
        Meeting the objectives of a drone program and managing costs can be a
        challenge. We assist enterprises who have decided to have in-house drone
        programs to smoothly navigate the integration process. From hardware to
        software, personnel, regulatory and safety considerations, we’re here to
        help.
      </Text>

      <InfoCard
        flexDir={{ base: 'column', lg: 'row' }}
        title="Who is the DroneHub Enterprise Integration Program designed for?"
        description="The Dronehub Enterprise Integration Program is ideal for businesses who want to start or expand in-house drone operations, minimize operational risks associated with drone operations, and maximize their investments."
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676715966/donehub-assets/who_Integration_program_design_for_rppm1y.png"
      />

      <InfoCard
        textAlign={{ base: 'left', lg: 'right' }}
        flexDir={{ base: 'column', lg: 'row-reverse' }}
        title="Which Products are Included in the Dronehub Enterprise Integration Program?"
        description="DJI Mavic 3, DJI Phantom 4 RTK, DJI Matrice 300 RTK, DJI Matrice 30 Series, DJI Mavic 2 Enterprise Advanced, DJI Zenmuse L1, P1, H20, H20T, H20N"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1676717744/donehub-assets/package_nuurpn.png"
      />
      <TalkToConsultant />
      <FrequentlyAskedQuestions />
    </Box>
  );
};

export default IntegrationProgram;
