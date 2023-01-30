import React from 'react'

import { Image, Button, HStack, Stack } from '@chakra-ui/react'

export const Menu: React.FC = () => {
  return (
    <Stack w={'100%'} justify={'center'} align={'center'}>
      <HStack 
        py={8} 
        px={24} 
        as={'nav'}
        w={'100%'}
        maxW={'1536px'}
        justify={{ base: 'center', md: 'space-between' }} 
      >
        <Image src={'logo.svg'} alt={'logo da auro bank'} h={'32px'} />
        <Button colorScheme={'primary'} display={{ base: 'none', md: 'block' }}>
          Simular Financiamento
        </Button>
      </HStack>
    </Stack>
  )
}