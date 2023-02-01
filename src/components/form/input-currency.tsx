import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import {
  FormLabel, 
  FormControl, 
  FormHelperText, 
  Input as InputChakra, 
  InputProps as InputChakraProps 
} from "@chakra-ui/react"
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputCurrencyProps extends InputChakraProps {
  name: string;
  label?: string;
  info?: string;
  validateMessage?: string;
  errors?: { [x: string]: any }
  register: UseFormRegisterReturn;
}

const defaultMaskOptions = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 9,
  allowNegative: false,
  allowLeadingZeroes: false,
}

export const InputCurrency: React.FC<InputCurrencyProps> = props => {
  const { name, label, info, register, errors, validateMessage, ...rest } = props

  const hasError = errors && !!errors[name]

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  })

  return (
    <FormControl
      maxW="100%"
      flex={rest.flex}
      padding="0.85rem 1.5rem"
      borderLeftWidth="0.125rem"
      width={rest.w || '26rem'}
      borderColor={ hasError ? 'red.500' : 'primary.500' }
    >
      {label && (
        <FormLabel color={'secondary.500'}>
          {label}
        </FormLabel>
      )}
      
      <InputChakra 
        name={name} 
        {...rest}
        bg="none"
        border={0}
        padding={0}
        height="auto"
        borderRadius={0}
        as={MaskedInput}
        mask={currencyMask}
        paddingBottom="0.56rem"
        fontSize={rest.fontSize || '1rem'}
        _focusWithin={{ outline: 'none' }}
        _focusVisible={{ outline: 'none' }}
        status={hasError ? 'red.500' : null}
        borderBottom={`1px solid ${hasError ? '#e53e3e' : '#565961B5'}`}
        _focus={{ zIndex: 1, borderColor: hasError ? 'red.500' : 'brand.500' }}
        _placeholder={{ 
          fontWeight: 600, 
          color: 'gray.400', 
          fontSize: rest.fontSize || '1rem', 
          lineHeight: rest.fontSize || '1rem' 
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
