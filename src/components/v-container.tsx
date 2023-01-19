import React from 'react'

import { VStack, StackProps, Stack } from '@chakra-ui/react'

export const VContainer: React.FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Stack w={'100%'} bg={rest.bg} justify={'center'} align={'center'}>
      <VStack 
        py={24} 
        spacing={8} 
        as={'section'}
        maxW={'1536px'}
        align={'center'}
        px={{ base: 6, sm: 10, md: 24}}
        {...rest}
      >
        {children}
      </VStack>
    </Stack>
  )
}