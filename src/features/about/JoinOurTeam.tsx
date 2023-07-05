import {
  Box,
  Button,
  ButtonProps,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { FormEvent, useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { IconButton } from '../../components';
import { IndustrySelect } from '../../components/Newsletter/IndustrySelect';

interface ModalProps {
  btnLabel: string;
  btnStyle: ButtonProps;
}

export function JoinOurTeamModal({ btnLabel, btnStyle }: ModalProps) {
  const [industry, setIndustry] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const form = useRef<any>();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: 'FormSubmitted Successfully',
      status: 'success',
    });
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        title={btnLabel}
        icon={<BiChevronRight />}
        maxW={{ base: '100%', md: '200px' }}
        {...btnStyle}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{btnLabel}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <form ref={form} onSubmit={sendEmail}>
                <HStack spacing={8}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="Louisa" name="firstName" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Clinton" name="lastName" />
                  </FormControl>
                </HStack>
                <HStack spacing={8} my="1rem">
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Louisa@dronehubgh.com"
                      name="email"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="text"
                      placeholder="+233-98760004994"
                      name="phone"
                    />
                  </FormControl>
                </HStack>
                <HStack spacing={8} my="1rem">
                  <FormControl isRequired>
                    <FormLabel>Interested Role</FormLabel>
                    <IndustrySelect
                      value={industry}
                      handleChange={(e) => setIndustry(e.target.value)}
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={8} my="1rem">
                  <FormControl>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea placeholder="Kindly type here" />
                  </FormControl>
                </HStack>

                <Box textAlign="right" my="1rem">
                  <Button
                    type="submit"
                    bgColor="brand.blue"
                    color="gray.100"
                    onClick={onClose}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
