import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { CustomMenuButton, IconButton } from '../../../components';

export const TalkToConsultant = () => {
  return (
    <Box bg="brand.darkBlue">
      <Flex
        align="center"
        h={{ base: '', lg: '650px' }}
        flexDir={{ base: 'column', lg: 'row' }}
        overflow="hidden"
      >
        <Box p={{ base: '2rem', lg: '4rem' }} w={{ base: '90%', lg: '50%' }}>
          <Heading size={{ base: 'lg', md: 'xl' }} color="white">
            Talk to a Consultant
          </Heading>
          <Text fontSize="1.2rem" w="90%" my="1rem" color="gray.300">
            Reach out to any of our consultants for more information about the
            Enterprise Integration Program.
          </Text>
          <Flex
            gap="0.5rem"
            w={{ lg: '80%' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <IconButton
              title="Check out Terms of Service"
              icon={<BiChevronRight />}
              minW="250px"
              bgColor="transparent"
              borderColor="gray.100"
              color="gray.100"
            />
            <CustomMenuButton title="Talk to a Consultant" />
          </Flex>
        </Box>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          justify={{ base: 'center', lg: 'flex-end' }}
        >
          <Box
            className="focus-section-design"
            w={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            h={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            borderStyle="solid"
            borderColor="background: rgba(6, 69, 164, 0.05)"
            borderRadius="100%"
            mb={{ base: '1rem', lg: '0' }}
            bg="center / contain no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676723169/donehub-assets/consult_1_hfhp7x.png)"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
