import Head from "next/head";

import { Menu } from "../../src/components/menu";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import { VContainer } from "../../src/components/v-container";
import { FinancyForm } from "../../src/pages/home-finance/form";
import { Footer } from "../../src/components/footer";

export default function FinancySimulatorForm() {
  const redirect = () => {
    window.open('https://api.whatsapp.com/send?phone=558131320403', '_blank')
  }

  return (
    <>
      <Head>
        <title>Simulação Financiamento Imobiliário - AuroBank</title>
      </Head>

      <VStack as={'main'} w={'100%'} spacing={0} overflow={'hidden'}>
        <Box w={'100%'} bgImage={'/bg.jpeg'} bgSize={'cover'} bgPosition={'center'}>
          <Menu colorInverse action={redirect} textButton={'Entre em contato'} />

          <VContainer spacing={4} pt={'40px !important'}>
            <Text 
              color={'white'}
              textAlign={'center'}
              maxW={{ base: '100%', md: '700px' }}
              fontWeight={{base: 'normal', md: 'bold' }}
            >
              Pensando em comprar um imóvel?
            </Text>
            <Heading 
              color={'white'}
              textAlign={'center'}
              fontSize={{base: '3xl', md: '6xl' }} 
              maxW={{ base: '100%', md: '700px' }} 
            >
              Encontre as melhores taxas de financiamento
            </Heading>
            <Text
              color={'white'}
              textAlign={'center'}
              maxW={{ base: '100%', md: '700px' }}
            >
              Simule seu financiamento imobiliário nos principais bancos de acordo com seu perfil, de forma 100% digital, gratuita e sem burocracia.
            </Text>
          </VContainer>
        </Box>

        <FinancyForm />
        <Footer />
      </VStack>
    </>
  )
}
