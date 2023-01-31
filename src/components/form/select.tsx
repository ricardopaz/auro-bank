import React from 'react'

import {
  FormControl, 
  FormHelperText,
  Select as SelectChakra,
  SelectProps as SelectChakraProps,
} from "@chakra-ui/react"

import { UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps extends SelectChakraProps {
  name: string;
  options?: any[];
  validateMessage?: string;
  errors?: { [x: string]: any }
  register: UseFormRegisterReturn;
}

export const Select: React.FC<SelectProps> = props => {
  const { name, register, errors, validateMessage, options, placeholder, ...rest } = props

  const hasError = errors && !!errors[name]

  return (
    <FormControl
      maxW="100%"
      height="4rem"
      width="26rem"
      flex={rest.flex}
      padding="0.85rem 1.5rem"
      borderLeftWidth="0.125rem"
      borderColor={ hasError ? 'red.500' : 'primary.500' }
    > 
      <SelectChakra
        name={name} 
        {...rest}
        bg="none"
        sx={{
          border: 0,
          padding: 0,
          borderRadius: 0,
          '& select': {
            height: "auto",
            fontSize: "1rem",
            paddingBottom: "0.56rem",
          } ,
        }}
        cursor="pointer"
        _focusWithin={{ outline: 'none' }}
        _focusVisible={{ outline: 'none' }}
        status={hasError ? 'red.500' : null}
        placeholder={placeholder || 'Selecione uma opção'}
        borderBottom={`1px solid ${hasError ? '#e53e3e' : '#565961B5'}`}
        _focus={{ zIndex: 1, borderColor: hasError ? 'red.500' : 'brand.500' }}
        {...register}
      >
        {options?.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </SelectChakra>

      {errors && errors[name] && errors[name].type === 'required' && (
        <FormHelperText color="red.500" mt="2px" fontSize={10}>
          Este campo é obrigatório
        </FormHelperText>
      )}

      {errors && errors[name] && errors[name].type === 'validate' && (
        <FormHelperText color="red.500" mt="2px" fontSize={10}>
          {validateMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
}
