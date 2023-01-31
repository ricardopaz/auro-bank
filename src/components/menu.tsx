import React from 'react'

import { Image, Button, HStack, Stack } from '@chakra-ui/react'

interface MenuProps {
  textButton?: string
  action?: () => void
  colorInverse?: boolean
}

export const Menu: React.FC<MenuProps> = props => {
  const { colorInverse, textButton, action } = props
  
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
        <Image src={colorInverse ? '/logo-white.svg' : '/logo.svg'} alt={'logo da auro bank'} h={'32px'} />
        <Button 
          onClick={action}
          display={{ base: 'none', md: 'block' }} 
          colorScheme={colorInverse ? 'whiteAlpha' : 'primary'} 
        >
          {textButton}
        </Button>
      </HStack>
    </Stack>
  )
}