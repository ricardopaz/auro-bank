import React from 'react'

import { Stack, HStack, StackProps } from '@chakra-ui/react'

export const HContainer: React.FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Stack w={'100%'} bg={rest.bg} justify={'center'} align={'center'}>
      <HStack 
        pt={8} 
        pb={24} 
        spacing={8} 
        as={'section'} 
        maxW={'1536px'}
        align={'center'} 
        px={{ base: 6, sm: 10, md: 24}} 
        {...rest}
      >
        {children}
      </HStack>
    </Stack>
  )
}