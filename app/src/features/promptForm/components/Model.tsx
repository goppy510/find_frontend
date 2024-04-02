import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  register: UseFormRegisterReturn;
}

export default function Model({ text, handleChange, register }: Props) {
  return (
    <FormControl>
      <FormLabel htmlFor="displayName">モデル</FormLabel>
      <Select id="model" {...register} value={text} onChange={handleChange}>
        <option value="GPT-3.5">ChatGPT-3.5</option>
        <option value="GPT-4" selected>
          ChatGPT-4
        </option>
      </Select>
    </FormControl>
  );
}
