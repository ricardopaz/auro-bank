import React from 'react'

import { Checkbox, CheckboxGroup, HStack, Stack, Text, Image } from '@chakra-ui/react'

export interface Bank {
  value: string
  image: string
  group?: string
}

const BANKS = [
  [
    { value: 'Itaú', group: 'itau', image: '/banks/icon/itau.svg' },
    { value: 'Itaú Uniclass', group: 'itau', image: '/banks/icon/itau.svg' },
    { value: 'Itaú Personnalité', group: 'itau', image: '/banks/icon/itau-personnalite.svg' },
  ],
  [
    { value: 'Bradesco', group: 'bradesco', image: '/banks/icon/bradesco.svg' },
    { value: 'Bradesco Classic', group: 'bradesco', image: '/banks/icon/bradesco-classic.svg' },
    { value: 'Bradesco Exclusive', group: 'bradesco', image: '/banks/icon/bradesco-exclusive.svg' },
  ],
  [
    { value: 'Bradesco Prime', group: 'bradesco', image: '/banks/icon/bradesco-prime.svg' },
    { value: 'Santander', image: '/banks/icon/santander.svg' },
    { value: 'Caixa', image: '/banks/icon/caixa.svg' },
  ],
  [
    { value: 'Banco do Brasil', image: '/banks/icon/banco-do-brasil.svg' },
    { value: 'Inter', image: '/banks/icon/inter.svg' },
    { value: 'Barisul', image: '/banks/icon/banrisul.svg' },
  ],
  [
    { value: 'Outros', image: '' },
  ]
]

interface FormBanks {
  banks: Bank[]
  isDisabled?: boolean
  setBanks(banks: Bank[]): void
}

export const FormBanks: React.FC<FormBanks> = ({ banks, setBanks, isDisabled }) => {

  const onChange = (bank: Bank, isChecked) => {
    if (isChecked) {
      setBanks(banks.filter(bankFound => bankFound.value !== bank.value))
    } else {
      const banksUpdated = [...banks]
      const indexOfGroup = bank.group ? banks.findIndex(bankFound => bankFound.group === bank.group) : -1

      if (indexOfGroup >= 0) {
        banksUpdated.splice(indexOfGroup)
      }

      banksUpdated.push(bank)

      setBanks(banksUpdated)
    }
  }

  return (
    <CheckboxGroup size={'lg'} colorScheme='secondary'>
      {BANKS.map((row, index) => (
        <Stack
          key={`bank-row-${index}`}
          spacing={{ base: 8, md: 12 }} 
          direction={{ base: 'column', md: 'row' }} 
          w={{ base: '100%', md: '600px', lg: '800px' }}
        >
          {row.map((bank, index) => {
            const isChecked = banks.includes(bank)

            return (
              <Checkbox 
                flex={1}
                key={`bank-${index}`} 
                isChecked={isChecked}
                isDisabled={isDisabled}
                onChange={() => onChange(bank, isChecked)}
              >
                <HStack align={'center'} spacing={2}>
                  {bank.image && <Image h={'20px'} src={bank.image} alt={bank.value} />}
                  <Text>{bank.value}</Text>
                </HStack>
              </Checkbox>
            )
          })}
        </Stack>
      ))}
    </CheckboxGroup>
  )
}