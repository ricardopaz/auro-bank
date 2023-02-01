import React from 'react'

import { HContainer } from '../../components/h-container'
import { Image, VStack, Text, Heading, Badge, Grid, GridItem, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const Hero: React.FC = () => {
  const router = useRouter()

  return (
    <HContainer mt={16}>
      <VStack flex={1} align={'flex-start'} spacing={8}>
        <Badge fontSize={'lg'} bg={'primary.500'} color={'white'}>
          Financiamento Imobiliário
        </Badge>
        <Heading fontSize={{ base: '3xl', sm: '4xl', xl: '6xl'}}>
          Encontre as melhores taxas de financiamento
        </Heading>
        <Text>
          Simule gratuitamente nos principais bancos, de forma totalmente digital e sem burocracia. 
          E fique tranquilo, nós te ajudamos em todo o processo!
        </Text>

        <VStack align={'flex-start'} w={'100%'} spacing={4}>
          <Text fontSize={'xs'}>Principais parceiros:</Text>
          <Grid 
            gap={6}
            rowGap={4}
            templateColumns={{ 
              base: 'repeat(2, auto)', 
              sm: 'repeat(3, auto)',
              md: 'repeat(6, auto)',
              lg: 'repeat(3, auto)',
              xl: 'repeat(6, auto)'
            }}
          >
            <PartnerLogo image={'/banks/caixa.png'} />
            <PartnerLogo image={'/banks/bb.png'} />
            <PartnerLogo image={'/banks/itau.png'} />
            <PartnerLogo image={'/banks/santander.png'} />
            <PartnerLogo image={'/banks/bradesco.png'} />
            <PartnerLogo image={'/banks/inter.png'} />
          </Grid>
        </VStack>

        <Button
          w={'100%'}
          size={'lg'}
          colorScheme={'secondary'}
          display={{ base: 'block', md: 'none' }}
          onClick={() => router.push('/financiamento/simular')}
        >
          Simule seu financiamento
        </Button>
      </VStack>

      <VStack flex={1} display={{ base: 'none', lg: 'flex' }}>
        <Image src={'hero.svg'} alt={'ilustração de pessoas comprando um imóvel'} />
      </VStack>
    </HContainer>
  )
}

const PartnerLogo = ({ image }) => (
  <GridItem justifyContent={'center'}>
    <Image alt={''} h={'20px'} src={image} />
  </GridItem>
)