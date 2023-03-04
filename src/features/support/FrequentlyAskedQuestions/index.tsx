import {
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AccordionLarge } from './AccordionLarge';
import { AccordionSmall } from './AccordionSmall';

export const AllFrequentlyAskedQuestions = () => {
  return (
    <Box my="4rem">
      <Text
        py="2rem"
        bgColor="rgba(255, 170, 0, 0.2)"
        bgImage="/assets/images/bg-overlay.svg"
        fontWeight="700"
        fontSize="2xl"
        textAlign="center"
      >
        Frequently Asked Questions
      </Text>

      <Box my="4rem" py="5rem">
        <Box display={{ base: 'none', lg: 'block' }}>
          <QuestionsTab
            tab1Content={<AccordionLarge />}
            tab2Content={<AccordionLarge />}
          />
        </Box>
        <Box display={{ base: 'block', lg: 'none' }}>
          <QuestionsTab
            tab1Content={<AccordionSmall />}
            tab2Content={<AccordionSmall />}
          />
        </Box>
      </Box>
    </Box>
  );
};

interface IQuestionsTabProps {
  tab1Content: ReactNode;
  tab2Content: ReactNode;
}
const QuestionsTab = ({ tab1Content, tab2Content }: IQuestionsTabProps) => {
  return (
    <Tabs w="80%" mx="auto" align="center">
      <TabList>
        <Tab>Consumers</Tab>
        <Tab>Businesses</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{tab1Content}</TabPanel>
        <TabPanel>{tab2Content}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
