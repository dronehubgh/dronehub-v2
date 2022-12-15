import { Select } from '@chakra-ui/react';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { fields } from '../../data';
import { selectStyles } from './_styles';

interface IIndustrySelectProps {
  value: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
  handleBlur?: FocusEventHandler<HTMLSelectElement>;
}

export const IndustrySelect = ({
  value,
  handleChange,
  handleBlur,
}: IIndustrySelectProps) => {
  return (
    <Select
      {...selectStyles}
      name="industry"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
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
