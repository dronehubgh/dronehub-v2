import { Box } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../../components/RichTextComponent';

interface Props {
  content: any;
}
export const Content = ({ content }: Props) => {
  return (
    <Box mx="2rem">
      <PortableText value={content} components={RichTextComponents} />
    </Box>
  );
};
