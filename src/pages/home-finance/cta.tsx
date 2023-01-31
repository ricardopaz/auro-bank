import React from 'react'

import { useRouter } from 'next/router'
import { Text, Button, Divider, Flex } from '@chakra-ui/react'

export const CTA: React.FC = () => {
  const router = useRouter()

  const redirect = () => {
    router.push('/financiamento/simulacao')
  }
  
  return (
    <Flex
      w={'100%'}
      as={'section'} 
      align={'center'}
      justify={'center'} 
      bg={'primary.500'}
      position={'relative'}
      p={{ base: 10, lg: 16 }}
      flexDirection={{ base: 'column-reverse', md: 'row'}}
    >
      <Button 
        zIndex={1}
        minH={'40px'}
        onClick={redirect}
        minW={'250px !important'} 
        colorScheme={'secondary'} 
        size={{ md: 'md', lg: 'lg' }} 
        mt={{ base: '30px!important', md: '0!important' }}
      >
        Simule seu financiamento
      </Button>

      <Divider orientation={'vertical'} h={10} mx={'30px!important'} display={{ base: 'none', md: 'block' }} />

      <Text
        zIndex={1}
        color={'white'}
        w={{ base: '100%', md: '550px' }} 
        sx={{ 'b': { color: 'secondary.500'} }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        Não perca tempo! Garanta já seu imóvel simulando em todos os bancos de uma só vez!
      </Text>
    </Flex>
  )
}
