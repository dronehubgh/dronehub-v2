import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '../../lib';
import { storyQuery } from '../../queries';

export const CustomerStories = () => {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    async function loadStories() {
      const res: any[] = await client.fetch(storyQuery);
      setStories(res);
    }

    loadStories();
  }, []);

  return (
    <Box m="3rem" id="customer-stories">
      <Heading mx="2rem" size={{ base: 'md', lg: 'lg' }} py="1rem">
        Customer Stories
      </Heading>

      <Box>
        <Flex bgColor="brand.blue" boxSizing="border-box">
          <Box w={{ base: '100%', lg: '50%' }} p={{ base: '2rem', lg: '4rem' }}>
            <Image
              src="https://res.cloudinary.com/djmx11b6s/image/upload/v1687782850/donehub-assets/p4p_2_jkhg3s.png"
              alt="Customer Stories"
              w="90%"
              mx="auto"
              maxW="400px"
            />
          </Box>
          {stories && stories.length > 0 && (
            <Flex
              w={{ base: '100%', lg: '50%' }}
              p={{ base: '2rem', lg: '4rem' }}
              flexDir="column"
              align="start"
              justify="center"
              color="white"
            >
              <Heading size="xl">{stories[0].customerName}</Heading>
              <Text my="2rem">{stories[0].name}</Text>
            </Flex>
          )}
        </Flex>

        {[...stories].slice(1, stories.length).map((story, index) => (
          <>
            <CustomerStoryCard
              profileUrl={story.profilePhoto}
              customerName={story.customerName}
              link={`/blog/${story.slug}`}
            />
            <Divider />
          </>
        ))}
      </Box>
    </Box>
  );
};

interface ICustomerStoryCardProps {
  profileUrl: string;
  customerName: string;
  link: string;
  address?: string;
}
export const CustomerStoryCard = ({
  profileUrl,
  customerName,
  link,
}: ICustomerStoryCardProps) => {
  return (
    <Flex align="center" justify="space-between" py="1rem" px="2rem">
      <Flex align="center" w="70%">
        <Box bgColor="#9CDEF6" borderRadius="50%">
          <Image boxSize="40px" src={profileUrl} alt="profile" />
        </Box>
        <Link href={link}>
          <Text fontWeight="bold" mx="1rem">
            {customerName}
          </Text>
        </Link>
      </Flex>
      <Text w="30%">Accra, Ghana</Text>
    </Flex>
  );
};
