import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Feedback: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Marco Zero Bank</title>
      </Head>

      <Flex 
        as="main" 
        w="100vw" 
        h="100vh"
        align="center" 
        padding="1rem"
        justify="center" 
        background="green.500" 
      >
        <Flex zIndex={2} maxW="900px" align="center" direction={{ base: 'column', md: 'row' }}>
          <Box display={{ base: 'none', md: 'block'}}>
            <IoCheckmarkCircleOutline size={300} color={'white'} />
          </Box>
          <Box display={{ base: 'block', md: 'none'}}>
            <IoCheckmarkCircleOutline size={100} color={'white'} />
          </Box>
          
          <Flex direction="column" ml="2rem">
            <Text 
              color="white" 
              fontWeight={900} 
              mt={{ base: '2rem', md: 0 }}
              mb={{ base: '1rem', md: '2rem' }} 
              fontSize={{ base: '2rem', md: '3rem'}} 
            >
              Dados Enviados!
            </Text>

            <Text color="white" fontWeight={600} fontSize={{ base: '1.2rem', md: '1.5rem' }}>
              O primeiro passo para lucrar foi dado!
            </Text>

            <Text color="white" fontWeight={300} fontSize={{ base: '1.2rem', md: '1.5rem' }}>
              Agradecemos a sua confiança! Agora iremos entrar em contato através do email e número de telefone informado 
              para seguir com o processo de Onboarding (capacitação) e gerar seu link de Finder para então você começar a lucrar.
            </Text>
            
            <Button
              mt="2rem"
              colorScheme={'whiteAlpha'}
              onClick={() => router.push('/')}
            >
              Ir para Página Inicial
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Feedback
