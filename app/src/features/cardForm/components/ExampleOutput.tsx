import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormHelperText,
  FormErrorMessage
} from "@/features/components";
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  errors?: FieldError | undefined;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
}

export default function ExampleOutput({
  text,
  maxLength,
  errors,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl isInvalid={Boolean(errors?.text)}>
      <FormLabel htmlFor="exampleOutput">出力例（ChatGPTが回答した内容を書いてください）</FormLabel>
      <Textarea
        id="exampleOutput"
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
