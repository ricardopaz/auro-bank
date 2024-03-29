import React from 'react'

import { useRouter } from 'next/router'
import { VContainer } from '../../components/v-container'
import { Card, CardBody, Image, Grid, GridItem, Heading, Text, VStack, Flex, Button } from '@chakra-ui/react'

export const Banks: React.FC = () => {
  const router = useRouter()

  const redirect = () => {
    router.push('/financiamento/simulacao')
  }
  
  return (
    <VContainer align={'flex-start'}>
      <Text fontSize={'1rem'} fontWeight={'black'} textTransform={'uppercase'} color={'primary.500'}>
        Parceiros
      </Text>

      <Heading sx={{ 'b': { color: 'secondary.500' }}}>
        <b>Simule</b> com todos os bancos
      </Heading>

      <Text w={{ base: '100%', md: '550px' }}>
        Aqui você simula nos principais bancos do Brasil de uma vez só, tudo de uma forma rápida, prática e 100% digital!
      </Text>

      <Flex direction={{ base: 'column', xl: 'row' }} align={'center'} w={'100%'}>
        <Grid
          w={{base: '100%', md: 'auto' }}
          rowGap={4}
          columnGap={{ base: 4, xl: 0 }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(6, 1fr)',
          }}
        >
          <BankCard image={'caixa'} tax={'8,95% a.a*'} />
          <BankCard image={'bradesco'} tax={'9,89% a.a*'} />
          <BankCard image={'santander'} tax={'9,99% a.a*'} />
          <BankCard image={'itau'} tax={'9,99% a.a*'} size={'35px'} />
          <BankCard image={'bb'} tax={'10,11% a.a*'} />
          <BankCard image={'inter'} tax={'10,90% a.a*'} />
        </Grid>
      </Flex>
      
      <Text w={'100%'} color={'gray.500'} mt={{ base: '30px', xl: 0 }} fontSize={'12px'}>
        * As taxas apresentadas dependem do grau de relacionamento dos clientes com os bancos, 
        podendo variar para mais ou para menos.
      </Text>
      
      <Flex w={'100%'} justify={'center'} mt={'50px!important'}>
        <Button maxW={{ base: '270px', sm: 'fit-content' }} colorScheme={'secondary'} size={'lg'} onClick={redirect}>
          Quero comparar os bancos
        </Button>
      </Flex>
    </VContainer>
  )
}

interface BankCardProps {
  image: any
  tax: string
  size?: string
}

const BankCard: React.FC<BankCardProps> = ({ image, tax, size }) => {
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
        h={'250px'}
        bg={'white'}
        role={'group'}
        w={{ md: '250px' }} 
        borderRadius={'1rem'}
        transition={'all 0.8s'}
        boxShadow={'-8px 8px 24px -4px rgb(145 158 171 / 40%)'}
      >
        <CardBody
          p={10}
          display={'flex'}
          alignItems={'center'} 
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <VStack spacing={8}>
            <Image 
              alt={''} 
              h={size || '25px'}
              src={`/banks/${image}.png`} 
            />

            <VStack spacing={4}>
              <Text fontSize={'sm'} textAlign={'center'}>
                {tax}
              </Text>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
  )
}
