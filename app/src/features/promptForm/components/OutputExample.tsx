import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormHelperText,
  FormErrorMessage
} from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  errors?: FieldError | undefined;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
}

export default function OutputExample({
  text,
  maxLength,
  errors,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl isInvalid={Boolean(errors?.text)}>
      <FormLabel htmlFor="outputExample">出力例（ChatGPTが回答した内容を書いてください）</FormLabel>
      <Textarea
        id="outputExample"
        {...register}
        value={text}
        onChange={handleChange}
      />
      <FormErrorMessage>
        {errors?.text && errors?.text.message}
      </FormErrorMessage>
      <FormHelperText>
        {text.length}/{maxLength}
      </FormHelperText>
    </FormControl>
  );
};
