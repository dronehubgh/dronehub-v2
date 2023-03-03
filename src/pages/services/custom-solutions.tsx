import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { CustomMenuButton } from '../../components';
import { ConnectWithUs, ServiceHeroBanner } from '../../features';

const CustomSolutions: NextPage = () => {
  return (
    <>
      <ServiceHeroBanner
        title="Custom Solutions"
        description="Unique drone solutions for each project"
        imageUrl="https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-18_mbxnv5.png"
        cta={
          <CustomMenuButton
            title="Send a request"
            bgColor="white"
            color="brand.blue"
            w={{ base: '80%', lg: '200px' }}
          />
        }
      />

      <Text lineHeight="10" my="6rem" w="80%" mx="auto">
        In selecting and deploying drone technology, there is no
        one-size-fits-all approach. Every project has its own specifications and
        may require a unique drone solution. At Dronehub, we explore your ideas
        and work with our partners to provide the best drone solutions that meet
        your specific requirements and enable you to carry out your tasks
        efficiently. Whatever your need is, we welcome the opportunity to work
        with you.
        <br />
        <br />
        Let us assist you in taking your business to the next level.
      </Text>

      <ConnectWithUs description="Let us know how we can help. " />
    </>
  );
};

export default CustomSolutions;
