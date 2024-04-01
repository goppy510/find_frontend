import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { categories } from '@/features/promptForm/const/category';

interface Props {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  register: UseFormRegisterReturn;
}

export default function Category({ text, handleChange, register }: Props) {
  return (
    <FormControl>
      <FormLabel htmlFor="category">カテゴリ</FormLabel>
      {/* Render the Select component outside the map function */}
      <Select id="category" {...register} value={text} onChange={handleChange}>
        {categories.map((category, index) => (
          // Map each category to an option element
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
