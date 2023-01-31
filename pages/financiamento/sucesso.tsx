import React from 'react';
import Head from 'next/head';
import UseAnimations from 'react-useanimations';
import radioButton from 'react-useanimations/lib/radioButton';

import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Feedback: React.FC = () => {
  const router = useRouter()

  const redirect = () => {
    window.open('https://api.whatsapp.com/send?phone=558131320403', '_blank')
  }

  return (
    <>
      <Head>
        <title>Simulação enviada - AuroBank</title>
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
        <Flex maxW="900px" align="center" direction={{ base: 'column', md: 'row' }}>
          <Box display={{ base: 'none', md: 'block'}}>
            <UseAnimations animation={radioButton} size={300} strokeColor="white" reverse />
          </Box>
          <Box display={{ base: 'block', md: 'none'}}>
            <UseAnimations animation={radioButton} size={100} strokeColor="white" reverse />
          </Box>
          
          <Flex direction="column" ml="2rem">
            <Heading 
              color="white" 
              fontWeight={900}
              fontFamily={'Poppins'}
              mt={{ base: '2rem', md: 0 }}
              mb={{ base: '1rem', md: '2rem' }} 
              fontSize={{ base: '2rem', md: '2.5rem'}} 
            >
              Simulação Solicitada!
            </Heading>

            <Text color="white" fontWeight={600} fontSize={{ base: '1.2rem', md: '1.5rem' }}>
              O primeiro passo para ter a chave do seu imóvel em mãos foi dado!
            </Text>

            <Text mt={4} color="white" fontWeight={300} fontSize={{ base: '1.2rem', md: '1.5rem' }}>
              Agradecemos a sua confiança! Agora nós iremos avaliar seus dados, realizar simulações, 
              em breve entraremos em contato através do número informado para dar o resultado e orientar sobre os próximos passos.
            </Text>
            
            <Stack mt={8} direction={{ base: 'column', md: 'row' }}>
              <Button variant={'ghost'} colorScheme={'whiteAlpha'} onClick={() => router.push('/')}>
                Voltar para Página Inicial
              </Button>

              <Button colorScheme={'whiteAlpha'} onClick={redirect}>
                Entrar em contato
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Feedback
