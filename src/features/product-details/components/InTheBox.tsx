import {
  Box,
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { commonPx } from '../../../consts';

interface IInBox {
  title: string;
  images: string[];
}
interface IInBoxProps {
  inBox: IInBox[];
}

export const InTheBox = ({ inBox }: IInBoxProps) => {
  return (
    <Box>
      <Text
        py={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
        textAlign="center"
      >
        What{`'`}s in the Box
      </Text>

      <Box>
        <Tabs w="100%">
          <TabList
            justifyContent="center"
            display="flex"
            mx="auto"
            px={commonPx}
            textAlign="center"
          >
            {inBox.map((item) => (
              <Tab
                key={item.title}
                _focus={{ border: 'none', boxShadow: 'none' }}
                fontWeight="400"
                color="#979797"
                fontSize={{ lg: '36px', md: '30px', base: '18px' }}
                _selected={{
                  fontWeight: 700,
                  color: 'brand.blue',
                  borderBottomWidth: 2,
                  outline: 'none',
                }}
              >
                {item.title}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {inBox.map((inBoxItem, index) => (
              <TabPanel key={index}>
                <Flex
                  overflow="hidden"
                  bg="white"
                  direction="column"
                  pos="relative"
                >
                  <Grid
                    templateColumns={{ base: 'repeat(4,1fr)' }}
                    justifyContent="space-between"
                    gap={2}
                  >
                    {inBoxItem.images.map((imageUrl, index) => (
                      <GridItem key={index}>
                        <Image
                          h={{ md: '40vh', lg: '50vh' }}
                          w="100%"
                          objectFit="cover"
                          src={
                            imageUrl ||
                            'https://res.cloudinary.com/djmx11b6s/image/upload/v1675947889/donehub-assets/design-03_uhy9t3.png'
                          }
                          alt=""
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
