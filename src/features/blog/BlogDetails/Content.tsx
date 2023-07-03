import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../../components/RichTextComponent';

interface Props {
  content: any;
}
export const Content = ({ content }: Props) => {
  return <PortableText value={content} components={RichTextComponents} />;
};
