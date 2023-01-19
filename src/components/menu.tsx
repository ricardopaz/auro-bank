import React from 'react'

import { Image, Button, HStack } from '@chakra-ui/react'

export const Menu: React.FC = () => {
  return (
    <HStack as={'nav'} px={24} py={8} justify={{ base: 'center', md: 'space-between' }}>
      <Image src={'logo.svg'} alt={'logo da auro bank'} h={'30px'} />
      <Button colorScheme={'primary'} display={{ base: 'none', md: 'block' }}>
        Simular Financiamento
      </Button>
    </HStack>
  )
}