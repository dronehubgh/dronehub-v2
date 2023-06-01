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
  Box,
} from '@chakra-ui/react';
import { Dispatch } from 'react';

interface ConfirmationModalProps {
  setAgreed: Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmationModal = ({ setAgreed }: ConfirmationModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    setAgreed(false);
    onClose();
  };

  return (
    <>
      <Box textAlign="right">
        <Button
          w={{ base: 'full', lg: 'fit-content' }}
          bgColor="brand.blue"
          color="white"
          rounded="sm"
          shadow="md"
          px="2rem"
          _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
          _active={{ bgColor: 'brand.blue' }}
          onClick={onOpen}
        >
          Submit
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Thank you for your feedback. It really matters to us and will help
            us get better.
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="brand.blue"
              color="white"
              size="sm"
              px="2rem"
              rounded="sm"
              shadow="md"
              mr={3}
              onClick={handleClose}
              _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
              _active={{ bgColor: 'brand.blue' }}
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
