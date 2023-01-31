import React from 'react'

import { VStack, StackProps, Stack } from '@chakra-ui/react'

export const VContainer: React.FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Stack w={'100%'} bg={rest.bg} justify={'center'} align={'center'}>
      <VStack 
        spacing={8} 
        as={'section'}
        maxW={'1536px'}
        align={'center'}
        py={{ base: 10, md: 24 }} 
        px={{ base: 6, sm: 10, md: 24}}
        {...rest}
      >
        {children}
      </VStack>
    </Stack>
  )
}