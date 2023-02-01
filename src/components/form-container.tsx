import React from 'react'

import { VContainer } from './v-container'
import { StackProps, Heading, Text, VStack } from '@chakra-ui/react'

interface FormContainerProps extends StackProps {
  title?: string
  subtitle?: string
}

export const FormContainer: React.FC<FormContainerProps> = props => {
  const { title, subtitle, children, ...rest } = props

  return (
    <VContainer w={'100%'} px={{ base: 6, md: 12, lg: 48 }} align={'flex-start'} {...rest}>
      <>
        <VStack spacing={2} align={'flex-start'}>
          <Heading 
            fontWeight={200}
            color={'primary.500'}
            fontFamily={'Poppins'}
            fontSize={{base: '2xl', md: '5xl'}}
            maxW={{ base: '100%', md: '700px' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {subtitle && (
            <Text color={'gray.500'}>{subtitle}</Text>
          )}
        </VStack>

        {children}
      </>
    </VContainer>
  )
}