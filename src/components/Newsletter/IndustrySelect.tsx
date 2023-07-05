import { Select } from '@chakra-ui/react';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { fields } from '../../data';
import { selectStyles } from './_styles';

interface IIndustrySelectProps {
  value: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const IndustrySelect = ({
  value,
  handleChange,
}: IIndustrySelectProps) => {
  return (
    <Select
      {...selectStyles}
      name="industry"
      value={value}
      onChange={handleChange}
    >
      <option value="">Your Industry</option>
      {fields.map((field) => (
        <option key={field} value={field}>
          {field}
        </option>
      ))}
    </Select>
  );
};
