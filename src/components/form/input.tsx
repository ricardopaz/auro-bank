import React from 'react'
import InputMask from "react-input-mask";

import {
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input as InputChakra, 
  InputProps as InputChakraProps 
} from "@chakra-ui/react"
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputChakraProps {
  name: string;
  mask?: string;
  label?: string;
  info?: string;
  validateMessage?: string;
  errors?: { [x: string]: any }
  register: UseFormRegisterReturn;
}

export const Input: React.FC<InputProps> = props => {
  const { name, mask, label, info, register, errors, validateMessage, ...rest } = props

  const hasError = errors && !!errors[name]

  return (
    <FormControl
      maxW="100%"
      flex={rest.flex}
      padding="0.85rem 1.5rem"
      borderLeftWidth="0.125rem"
      width={rest.w || '26rem'}
      borderColor={ hasError ? 'red.500' : rest.borderColor || 'primary.500' }
    >
      {label && (
        <FormLabel color={'secondary.200'}>
          {label}
        </FormLabel>
      )}
      
      <InputChakra 
        name={name} 
        {...rest}
        bg="none"
        border={0}
        padding={0}
        mask={mask}
        height="auto"
        borderRadius={0}
        paddingBottom="0.56rem"
        as={mask ? InputMask : 'input'}
        _focusWithin={{ outline: 'none' }}
        fontSize={rest.fontSize || "1rem"}
        _focusVisible={{ outline: 'none' }}
        status={hasError ? 'red.500' : null}
        _focus={{ zIndex: 1, borderColor: hasError ? 'red.500' : 'white' }}
        borderBottom={`1px solid ${hasError ? '#e53e3e' : '#ffffff90'}`}
        borderBottomColor={rest.borderBottomColor}
        _placeholder={{ 
          color: 'gray.400', 
          fontWeight: 600, 
          fontSize: rest.fontSize ||'1rem', 
          lineHeight: rest.fontSize ||'1rem' 
        }}
        {...register}
      />

      {info && (
        <FormHelperText>
          {info}
        </FormHelperText>
      )}

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
