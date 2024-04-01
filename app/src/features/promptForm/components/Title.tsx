import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  text: string;
  errors?: FieldError | undefined;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegisterReturn;
}

export default function Title({
  text,
  errors,
  maxLength,
  handleChange,
  register,
}: Props) {
  return (
    <FormControl isInvalid={Boolean(errors?.message)}>
      <FormLabel htmlFor="title">タイトル</FormLabel>
      <Textarea id="title" {...register} value={text} onChange={handleChange} />
      <FormErrorMessage>{errors && errors?.message}</FormErrorMessage>
      <FormHelperText>
        {text.length}/{maxLength}
      </FormHelperText>
    </FormControl>
  );
}
