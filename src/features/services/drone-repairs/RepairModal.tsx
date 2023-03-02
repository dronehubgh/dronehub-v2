import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ButtonProps,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  RadioGroup,
  Stack,
  Radio,
  Textarea,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BtnProps extends ButtonProps {
  label: string;
  icon?: ReactNode;
}
interface IRepairModalProps {
  btnProps: BtnProps;
  title?: string;
}

export const RepairModal = ({ btnProps, title }: IRepairModalProps) => {
  const { label, icon, ...rest } = btnProps;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="white"
        px="2rem"
        py="1.5rem"
        {...rest}
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
        mt="5px"
      >
        {label} <Text ml="0.5rem">{icon}</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title || 'Request a Repair'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt="1rem">
            <Flex gap="20px" flexDir={{ base: 'column', lg: 'row' }}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input type="text" placeholder="Louisa" />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Clinton" />
              </FormControl>
            </Flex>
            <Flex gap="20px" flexDir={{ base: 'column', lg: 'row' }} my="1rem">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Louisa@dronehubgh.com" />
              </FormControl>
              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <Input type="text" placeholder="+233-98760004994" />
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>How did you hear about us</FormLabel>
              <Select placeholder="Media">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <Accordion my="2rem" allowToggle>
              <AccordionItem border="none">
                <h2>
                  <AccordionButton fontWeight="bold" maxW="150px">
                    <Box as="span" flex="1" textAlign="left">
                      More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex
                    gap="20px"
                    flexDir={{ base: 'column', lg: 'row' }}
                    my="1rem"
                  >
                    <FormControl>
                      <FormLabel>Model</FormLabel>
                      <Select placeholder="Media">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Item Serial Number</FormLabel>
                      <Input type="text" placeholder="SN-98760004994" />
                    </FormControl>
                  </Flex>

                  <Flex
                    gap="20px"
                    flexDir={{ base: 'column', lg: 'row' }}
                    my="1rem"
                  >
                    <Flex
                      flexDir="column"
                      justify="space-between"
                      w={{ base: '100%', lg: '50%' }}
                    >
                      <Text my="0.5rem" fontWeight="light">
                        Attempted repair
                      </Text>
                      <Text fontWeight="light">
                        Kindly let us know if you’ve attempted to fix your
                        drone. If yes, please provide details about previous
                        work done.
                      </Text>
                      <RadioGroup defaultValue="2" my="1rem">
                        <Stack spacing={10} direction="row">
                          <Radio value="yes">Yes</Radio>
                          <Radio value="no">No</Radio>
                        </Stack>
                      </RadioGroup>
                    </Flex>

                    <Flex
                      flexDir="column"
                      justify="space-between"
                      w={{ base: '100%', lg: '50%' }}
                    >
                      <Text my="0.5rem" fontWeight="light">
                        Water damage
                      </Text>
                      <Text fontWeight="light">
                        Has your drone been in contact with water?
                      </Text>
                      <RadioGroup defaultValue="2" my="1rem">
                        <Stack spacing={10} direction="row">
                          <Radio value="yes">Yes</Radio>
                          <Radio value="no">No</Radio>
                        </Stack>
                      </RadioGroup>
                    </Flex>
                  </Flex>

                  <FormControl>
                    <FormLabel>Model</FormLabel>
                    <Textarea placeholder="Kindly type here" />
                  </FormControl>

                  <FormControl mt="1rem">
                    <FormLabel mb="1rem">Service Level</FormLabel>
                    <Stack gap={2}>
                      <Radio name="1" colorScheme="red">
                        Standard Service
                      </Radio>
                      <Radio name="1" colorScheme="green">
                        Emergency Service
                      </Radio>
                    </Stack>
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>

          <ModalFooter>
            <Button
              _hover={{ bgColor: 'none' }}
              _active={{ bgColor: 'none' }}
              bgColor="brand.blue"
              color="gray.100"
              mr={3}
            >
              Request a Repair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
