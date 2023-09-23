import React from 'react';
import {
  FormControl,
  FormLabel,
  Select
} from "@/features/components";
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  register: UseFormRegisterReturn;
}

export default function Model({
  text,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl>
      <FormLabel htmlFor="displayName">モデル</FormLabel>
      <Select
        id="model"
        {...register}
        value={text}
        onChange={handleChange}
      >
        <option value='ChatGPT-3.5' selected>ChatGPT-3.5</option>
        <option value='ChatGPT-4'>ChatGPT-4</option>
      </Select>
    </FormControl>
  );
};
