import React from 'react'

import { Card, CardBody, Image, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'

export const About: React.FC = () => {
  return (
    <VStack as={'section'} px={{ base: 6, sm: 10, md: 24}} py={24} align={'flex-start'} spacing={8} bg={'gray.100'}>
      <Text fontSize={'1rem'} fontWeight={'black'} textTransform={'uppercase'} color={'primary.500'}>
        passo a passo
      </Text>

      <Heading>Seu financiamento em 6 passos</Heading>

      <Text w={{ base: '100%', md: '550px' }} sx={{ 'b': { color: 'secondary.500'} }}>
        O processo é tão simples que em 6 passos você garante seu imóvel. 
        De forma ágil, 100% digital e com a melhor assessoria da <b>Auro Bank</b>.
      </Text>

      <Grid
        rowGap={4}
        columnGap={{ base: 4, xl: 0 }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(6, 1fr)',
        }}
      >
        <StepCard title={'1. Simular'} image={'simular'} description={'Preencha o formulário com os dados da sua simulação.'}/>
        <StepCard title={'2. Assessoria'} image={'assessoria'} description={'Em torno de 20 min um dos nossos assessores entrará em contato com o resultado da sua simulação.'}/>
        <StepCard title={'3. Documentos'} image={'documentos'} description={'Após aprovação de crédito solicitado, é preciso enviar os docuemntos para análise.'}/>
        <StepCard title={'4. Analise'} image={'analise'} description={'Documentos aprovados, o banco envia um engenheiro para avaliação do imóvel.'}/>
        <StepCard title={'5. Sem Burocracia'} image={'sem-burocracia'} description={'Tudo aprovado! Não será preciso de um despachante, nós iremos facilitar todo o processo.'}/>
        <StepCard title={'6. Pronto!'} image={'pronto'} description={'Liberação do recurso realizada com sucesso.'}/>
      </Grid>
    </VStack>
  )
}

interface StepCardProps {
  image: any
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ image, title, description }) => {
  return (
    <GridItem
      left={0}
      className='card'
      position={'relative'}
      transition={'0.4s ease-out'}
      sx={{
        _notFirst: { ml: { xl: '-50px' } },
        _hover: {
          transform: { xl: 'translateY(-20px)' },
          '~ .card': { left: { xl: '50px' } },
        },
      }}
    >
      <Card
        bg={'white'}
        role={'group'}
        borderRadius={'1rem'}
        transition={'all 0.8s'}
        w={{base: '100%', xl: '250px' }} 
        h={{ base: '300px', xl: '400px' }}
        boxShadow={'-8px 8px 24px -4px rgb(145 158 171 / 40%)'}
      >
        <CardBody
          p={10}
          display={'flex'}
          alignItems={'center'} 
          flexDirection={'column'}
          pt={{ base: 10, xl: 20 }}
        >
          <VStack spacing={8}>
            <Image 
              alt={''} 
              h={{ base: '40px', xl: '50px' }}
              src={`/icon/${image}-azul-claro.svg`} 
            />

            <VStack spacing={4}>
              <Heading fontSize={'lg'} color={'primary.500'}>
                {title}
              </Heading>
              <Text fontSize={'sm'} textAlign={'center'}>
                {description}
              </Text>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
  )
}
