import React from 'react'

import { STATES } from '../../utils/constants'
import { Input } from '../../components/form/input'
import { Select } from '../../components/form/select'
import { FormContainer } from '../../components/form-container'
import { Box, Button, Checkbox, CheckboxGroup, FormControl, FormLabel, HStack, Image, Link, Radio, RadioGroup, Stack, Switch, Text, VStack } from '@chakra-ui/react'

export const FinancyForm: React.FC = () => {

  return (
    <Box as={'form'} w={'100%'}>
      <FormContainer 
        title='Em que <strong>momento</strong> de compra você está?' 
        subtitle='Conte-nos mais sobre seu momento de compra.'
      >
        <RadioGroup defaultValue='1'>
          <Stack>
            <Radio value='1'>
              Estou buscando imóveis na internet e ainda não visitei nenhuma
            </Radio>
            <Radio value='2'>
              Estou começando a fazer visita em alguns imóveis
            </Radio>
            <Radio value='3'>
              Estou negociando e devo fazer proposta nos próximos 30 dias
            </Radio>
            <Radio value='4'>
              O proprietário já aceitou minha proposta e devo assinar o contrato em poucos dias
            </Radio>
          </Stack>
        </RadioGroup>
      </FormContainer>

      <FormContainer 
        title='Qual o <strong>valor</strong> do imóvel?' 
        subtitle='Para começar o cálculo precisamos saber o valor da unidade que será financiada'
      >
        <Input
          name="valor" 
          type="number"
          maxW={'400px'}
          register={null}
          fontSize={'4xl'}
          placeholder={'R$ 0'}
          label={'Qual o valor aproximado do imóvel que deseja financiar?'}
        />
      </FormContainer>

      <FormContainer 
        title='Qual a <strong>localização</strong> do imóvel' 
        subtitle='Precisamos também do local do imóvel desejado.'
      >
        <Select
          flex={1}
          name="state" 
          options={STATES}
          register={null}
          placeholder={'Selecione um estado'}
        />
      </FormContainer>

      <FormContainer 
        title='Quanto você tem para dar de <strong>entrada</strong>?' 
        subtitle='O valor da entrada é decisivo para o financiamento do seu imóvel. A partir dela calculamos o valor a financiar.'
      >
        <Input
          type="number"
          maxW={'400px'}
          register={null}
          fontSize={'4xl'}
          name="availableValor" 
          placeholder={'R$ 0'}
          label={'Quanto você tem disponível?'}
        />

        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='use-fgts' mb='0'>
            Pretende usar seu FGTS?
          </FormLabel>
          <Switch id='use-fgts' size={'lg'} />
        </FormControl>

        <Input
          type="number"
          maxW={'400px'}
          register={null}
          fontSize={'4xl'}
          placeholder={'R$ 0'}
          name="availableValor" 
          label={'Quanto vai user do seu FGTS?'}
        />
      </FormContainer>

      <FormContainer 
        title='Com quais bancos você possui <strong>relacionamento</strong>?' 
        subtitle='Essa informação é muito importante para agilizar o seu processo de financiamento e através dela conseguimos garantir as melhores taxas para você.'
      >
        <Text color={'secondary.500'}>
          Selecione os bancos que você possui conta:
        </Text>

        <CheckboxGroup colorScheme='secondary' size={'lg'}>
          <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '600px', lg: '800px' }}>
            <Checkbox value='Itaú' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/itau.svg'} alt={'Itaú'} />
                <Text>Itaú</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Itaú Uniclass' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/itau.svg'} alt={'Itaú Uniclass'} />
                <Text>Itaú Uniclass</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Itaú Personalité' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/itau-personnalite.svg'} alt={'Itaú Personalité'} />
                <Text>Itaú Personnalité</Text>
              </HStack>
            </Checkbox>
          </Stack>
          <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '600px', lg: '800px' }}>
            <Checkbox value='Bradesco' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/bradesco.svg'} alt={'Bradesco'} />
                <Text>Bradesco</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Bradesco Classic' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/bradesco-classic.svg'} alt={'Bradesco Classic'} />
                <Text>Bradesco Classic</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Bradesco Exclusive' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/bradesco-exclusive.svg'} alt={'Bradesco Exclusive'} />
                <Text>Bradesco Exclusive</Text>
              </HStack>
            </Checkbox>
          </Stack>
          <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '600px', lg: '800px' }}>
            <Checkbox value='Bradesco Prime' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/bradesco-prime.svg'} alt={'Bradesco Prime'} />
                <Text>Bradesco Prime</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Santander' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/santander.svg'} alt={'Santander'} />
                <Text>Santander</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Caixa' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'15px'} src={'/banks/icon/caixa.svg'} alt={'Caixa'} />
                <Text>Caixa</Text>
              </HStack>
            </Checkbox>
          </Stack>
          <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '600px', lg: '800px' }}>
            <Checkbox value='Banco do Brasil' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/banco-do-brasil.svg'} alt={'Banco do Brasil'} />
                <Text>Banco do Brasil</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Inter' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/inter.svg'} alt={'Inter'} />
                <Text>Inter</Text>
              </HStack>
            </Checkbox>
            <Checkbox value='Banrisul' flex={1}>
              <HStack align={'center'} spacing={2}>
                <Image h={'20px'} src={'/banks/icon/banrisul.svg'} alt={'Banrisul'} />
                <Text>Banrisul</Text>
              </HStack>
            </Checkbox>
          </Stack>
          <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', md: 'row' }}>
            <Checkbox value='kakashi'>Outros</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormContainer>

      <FormContainer 
        title='Conte-nos sobre sua <strong>idade</strong>, <strong>cpf</strong> e <strong>renda</strong>' 
        subtitle='Sua idade influencia na quantidade de parcelas, já o seu cpf, para validarmos suas informações junto as instituições
        financeiras e sua renda mensal no valor total que você pode financiar.'
      >
        <VStack spacing={{ base: 8, md: 16 }} align={'flex-start'} w={'100%'}>
          <Stack w={'100%'} direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 24 }}>
            <Input
              maxW={'400px'}
              register={null}
              fontSize={'4xl'}
              mask={'99/99/9999'}
              name={'availableValor'} 
              label={'Quando você nasceu?'}
            />
            <Input
              maxW={'400px'}
              register={null}
              fontSize={'4xl'}
              mask={'999.999.999-99'}
              name={'availableValor'} 
              label={'Qual é o seu CPF?'}
            />
          </Stack>

          <Input
            maxW={'400px'}
            register={null}
            type={'number'}
            fontSize={'4xl'}
            name={'availableValor'} 
            label={'Qual sua renda mensal aproximadamente?'}
            info={'Se for compor o financiamento com mais pessoas, some as rendas e informe-as neste campo.'}
          />
        </VStack>
      </FormContainer>

      <FormContainer 
        title='Estamos <strong>quase lá...</strong>' 
        subtitle='Agora só precisamos de algumas últimas informações e já vamos gerar sua simulação totalmente personalizada.'
      >
        <Input
          w={'100%'}
          register={null}
          fontSize={'4xl'}
          name={'availableValor'} 
          label={'Nome completo'}
        />
        <Input
          w={'100%'}
          register={null}
          label={'E-mail'}
          fontSize={'4xl'}
          name={'availableValor'} 
        />
        <Input
          register={null}
          fontSize={'4xl'}
          label={'Telefone'}
          name={'availableValor'} 
          mask={'+99 (99) 99999-9999'}
        />

        <FormControl>
          <FormLabel as='legend' color={'gray.500'}>
            Gostaria da ajuda gratuita de um de nossos especialistas em financiamento imobiliário?
          </FormLabel>
          <RadioGroup defaultValue='S' size={'lg'} mt={4}>
            <VStack spacing={4} align={'flex-start'}>
              <Radio value='S'>Sim, por favor.</Radio>
              <Radio value='N'>Ainda não. Estou apenas comparando taxas.</Radio>
            </VStack>
          </RadioGroup>
        </FormControl>
      </FormContainer>

      <FormContainer title='<strong>Tudo pronto.</strong><br /> Vamos ver o resultado?' pb={{ base: 24, md: 48 }}>
        <Text sx={{ 'a': { color: 'secondary.500', fontWeight: 'bold' }}}>
          Ao prosseguir você está de acordo com os <Link>Termos de uso</Link> e nossa <Link>Política de privacidade</Link>
        </Text>
        <Button
          colorScheme={'secondary'}
          w={{ base: '100%', md: '300px' }}
        >
          Simular
        </Button>
      </FormContainer>
    </Box>
  )
}