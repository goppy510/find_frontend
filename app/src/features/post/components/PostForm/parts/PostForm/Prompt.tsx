import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@/features/components";
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  errors?: FieldError | undefined;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
}

export default function Prompt({
  text,
  errors,
  maxLength,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl isInvalid={Boolean(errors?.text)}>
      <FormLabel htmlFor="prompt">プロンプト</FormLabel>
      <Textarea
        id="prompt"
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
