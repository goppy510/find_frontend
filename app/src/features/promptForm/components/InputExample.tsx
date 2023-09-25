import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  errors?: FieldError | undefined;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
}

export default function InputExample({
  text,
  maxLength,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl>
      <FormLabel htmlFor="inputExample">入力例（具体的な値などを入れてください）</FormLabel>
      <Textarea
        id="inputExample"
        {...register}
        value={text}
        placeholder="[分野]:医療, [色]: 白"
        onChange={handleChange}
      />
      <FormHelperText>
        {text.length}/{maxLength}
      </FormHelperText>
    </FormControl>
  );
};
