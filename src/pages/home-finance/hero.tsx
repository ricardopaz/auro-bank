import React from 'react'

import { HContainer } from '../../components/h-container'
import { Image, VStack, Text, Heading, Badge, Grid, GridItem } from '@chakra-ui/react'

export const Hero: React.FC = () => {
  return (
    <HContainer>
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
      </VStack>

      <VStack flex={1} display={{ base: 'none', lg: 'flex' }}>
        <Image src={'hero.svg'} alt={'ilustração de pessoas comprando um imóvel'} />
      </VStack>
    </HContainer>
  )
}

const PartnerLogo = ({ image }) => (
  <GridItem justifyContent={'center'}>
    <Image 
      alt={''} 
      h={'20px'} 
      src={image} 
      opacity={0.8} 
      transition={'all 0.3s'}
      filter={'grayscale(1)'} 
      _hover={{ filter: 'grayscale(0)', opacity: 1 }} 
    />
  </GridItem>
)