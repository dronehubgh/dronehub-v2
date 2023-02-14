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

export const InTheBox = () => {
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
            <Tab
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
              DJI Mini 2
            </Tab>
            <Tab
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
              DJI Mini 2 Fly More Combo
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
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
                  <GridItem>
                    <Image
                      h={{ md: '40vh', lg: '50vh' }}
                      w="100%"
                      objectFit="cover"
                      src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675947889/donehub-assets/design-02_dsnlsm.png"
                      alt=""
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      h={{ md: '40vh', lg: '50vh' }}
                      w="100%"
                      objectFit="cover"
                      src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675947889/donehub-assets/design-03_uhy9t3.png"
                      alt=""
                    />
                  </GridItem>
                  <GridItem>
                    <Box
                      h={{ md: '40vh', lg: '50vh' }}
                      w="100%"
                      objectFit="cover"
                    >
                      <Image
                        h={{ md: '20vh', lg: '25vh' }}
                        mb={2}
                        w="100%"
                        objectFit="cover"
                        src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675947889/donehub-assets/design-04_tcpwem.png"
                        alt=""
                      />
                      <Image
                        h={{ md: '20vh', lg: '25vh' }}
                        w="100%"
                        objectFit="cover"
                        src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675947889/donehub-assets/design-01_ig6myn.png"
                        alt=""
                      />
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Image
                      h={{ md: '40vh', lg: '50vh' }}
                      w="100%"
                      objectFit="cover"
                      src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675947929/donehub-assets/design-e00_o0ouay.png"
                      alt=""
                    />
                  </GridItem>
                </Grid>
              </Flex>
            </TabPanel>
            <TabPanel h="50vh">
              <Text
                fontStyle="italic"
                h="100%"
                textAlign="center"
                lineHeight="50vh"
              >
                No Items available for this tab
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
