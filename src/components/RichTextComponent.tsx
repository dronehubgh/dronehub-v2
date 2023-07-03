import React from 'react';
import { PortableTextComponents } from '@portabletext/react';
import { Box, Image, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import { urlFor } from '../lib/sanity';

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image src={urlFor(value).url()} w="90%" mx="auto" alt="" my="2rem" />
    ),

    callToAction: ({ value, isInline }) =>
      isInline ? <a href={value.url}>{value.text}</a> : <Box>{value.text}</Box>,
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <UnorderedList mt="0.5rem">{children}</UnorderedList>
    ),
    number: ({ children }) => <OrderedList mt="0.5rem">{children}</OrderedList>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <OrderedList mx="auto" mt="0.5rem">
        {children}
      </OrderedList>
    ),
  },

  block: {
    h1: ({ children }) => (
      <Text
        fontSize={{ lg: '24px', base: '12px' }}
        fontWeight="700"
        textAlign={{ lg: 'left' }}
        mb="1rem"
      >
        {children}
      </Text>
    ),

    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};
