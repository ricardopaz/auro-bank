import React from 'react'

import { Image, Button, HStack, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface MenuProps {
  textButton?: string
  action?: () => void
  colorInverse?: boolean
}

export const Menu: React.FC<MenuProps> = props => {
  const router = useRouter()

  const { colorInverse, textButton, action } = props
  
  return (
    <Stack w={'100%'} justify={'center'} align={'center'} bgImage={colorInverse ? '' : '/bg.jpg'} bgPosition={'center'} bgSize={'cover'}>
      <HStack 
        py={8} 
        px={24} 
        as={'nav'}
        w={'100%'}
        maxW={'1536px'}
        justify={{ base: 'center', md: 'space-between' }} 
      >
        <Image 
          h={'32px'} 
          cursor={'pointer'}
          alt={'logo da AuroBank'} 
          onClick={() => router.push('/')}
          src={colorInverse ? '/logo-white.svg' : '/logo-white.svg'} 
        />
        <Button 
          bg={'white'}
          onClick={action}
          color={'primary.500'}
          display={{ base: 'none', md: 'block' }}
        >
          {textButton}
        </Button>
      </HStack>
    </Stack>
  )
}