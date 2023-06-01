import { ChevronDownIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import { IconButton } from '../../components';

export const FieldDemoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        title="Find out More"
        icon={<ChevronRightIcon />}
        w="fit-content"
        bgColor="brand.blue"
        color="white"
        px="2rem"
        size="sm"
        shadow="md"
        _active={{ bgColor: 'brand.blue' }}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w={{ base: '100%', lg: '80%' }} mx="auto">
            <Box textAlign="right" my="2rem">
              <Button
                variant="ghost"
                color="brand.blue"
                size="xl"
                onClick={onClose}
              >
                <CloseIcon />
              </Button>
            </Box>
            <Flex
              gap={8}
              flexDir={{ base: 'column', lg: 'row' }}
              justify="space-between"
            >
              <Heading size={{ base: 'md', lg: 'xl' }}>
                Field Demo | Matrice 300 RTK & Zenmuse P1
              </Heading>
              <IconButton
                title="Register now"
                icon={<ChevronDownIcon />}
                w="fit-content"
                bgColor="brand.blue"
                color="white"
                px="2rem"
                size="sm"
                shadow="md"
                _active={{ bgColor: 'brand.blue' }}
              />
            </Flex>
          </ModalHeader>
          <ModalBody w={{ base: '100%', lg: '80%' }} mx="auto">
            <Box fontWeight="bold" mt="2rem" fontSize="sm">
              <Text my="1rem">Date & Time: TBA</Text>
              <Text my="1rem">Status: Available to Book</Text>
              <Text my="1rem">Location: Greater Accra Region, Ghana</Text>
            </Box>
            <Box my="2rem">
              <Heading size="md" py="1rem">
                Summary
              </Heading>
              This event will be focusing on Matrice 300 RTK & Zenmuse P1 from
              DJI. The combination of the two platforms sets a new standard in
              aerial surveying accuracy and efficiency. The event will start
              with the introduction of this drone solution along with the
              Dronehub background. After that, the attendees will have the
              demonstration of both the Matrice 300 RTK and Zenmuse P1. A
              comprehensive field demo is also organized for this event that
              will be followed by the DJI Terra demonstration. Finally, the
              attendee will have the chance to ask all their questions from the
              industry experts.
              <br />
              <br />
              Join our technical team at Dronehub as we discuss and demonstrate
              all you need to know about the Matrice 300 RTK and Zenmuse P1
              payload and their industrial applications.
            </Box>

            <Box my="2rem">
              <Heading size="md" py="1rem">
                Agenda
              </Heading>
              Introduction <br />
              Dronehub Background <br />
              In-depth look at the Matrice 300 RTK and Zenmuse P1 <br />
              Matrice 300 RTK & Zenmuse P1 Demonstration <br />
              Post-processing with DJI Terra <br />
              Industrial Applications
              <br />
              Q&A
            </Box>
          </ModalBody>

          <ModalFooter w={{ base: '100%', lg: '80%' }} mx="auto">
            <IconButton
              title="Register now"
              icon={<ChevronDownIcon />}
              w="fit-content"
              bgColor="brand.blue"
              color="white"
              px="2rem"
              size="sm"
              shadow="md"
              _active={{ bgColor: 'brand.blue' }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
