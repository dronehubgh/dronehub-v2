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
import { IFAQ } from '../../../models/app';
import { AccordionLarge } from './AccordionLarge';
import { AccordionSmall } from './AccordionSmall';

interface Props {
  faq: IFAQ[];
}
export const AllFrequentlyAskedQuestions = ({ faq }: Props) => {
  return (
    <Box my="4rem">
      <Text
        py="2rem"
        bgColor="rgba(255, 170, 0, 0.2)"
        bgImage="/assets/images/bg-overlay.svg"
        fontWeight="700"
        fontSize="2xl"
        textAlign="center"
        id="faq"
      >
        Frequently Asked Questions
      </Text>

      <Box mb="4rem" py="5rem">
        <Box display={{ base: 'none', lg: 'block' }}>
          <QuestionsTab
            tab1Content={
              <AccordionLarge
                faq={faq.filter((item) => item.target === 'business')}
              />
            }
            tab2Content={
              <AccordionLarge
                faq={faq.filter((item) => item.target === 'consumers')}
              />
            }
          />
        </Box>
        <Box display={{ base: 'block', lg: 'none' }}>
          <QuestionsTab
            tab1Content={
              <AccordionSmall
                faq={faq.filter((item) => item.target === 'business')}
              />
            }
            tab2Content={
              <AccordionSmall
                faq={faq.filter((item) => item.target === 'consumers')}
              />
            }
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
        <Tab>Businesses</Tab>
        <Tab>Consumers</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{tab1Content}</TabPanel>
        <TabPanel>{tab2Content}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
