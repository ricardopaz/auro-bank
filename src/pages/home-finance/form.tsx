import api from '@/api/index'
import React, { useState } from 'react'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Bank, FormBanks } from './form-banks'
import { Input } from '../../components/form/input'
import { Select } from '../../components/form/select'
import { PRODUCT, STATES } from '../../utils/constants'
import { FormContainer } from '../../components/form-container'
import { InputCurrency } from '@/components/form/input-currency'
import { isValidEmail, isValidName, isValidPhone } from '../../utils/validators'
import { Box, Button, FormControl, FormLabel, Link, Radio, RadioGroup, Stack, Switch, Text, useToast, VStack } from '@chakra-ui/react'

export const FinancyForm: React.FC = () => {
  const toast = useToast()
  const router = useRouter()

  const [banks, setBanks] = useState<Bank[]>([])
  const [moment, setMoment] = useState<string>('1')
  const [useFGTS, setUseFGTS] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [needContact, setNeedContact] = useState<boolean>(true)

  const { register, handleSubmit, control, formState: { errors } } = useForm()

  /** Actions */

  const submit = async (form) => {
    try {
      setLoading(true)

      const banksList = banks.map(bank => bank.value)
      const { utm_source, utm_campaign } = router.query
  
      await api.post(`/api/leads`, { 
        ...form, 
        moment, 
        useFGTS, 
        utm_source, 
        needContact, 
        utm_campaign, 
        banks: banksList, 
        product: PRODUCT.FINANCY
      })
  
      // router.push('/financiamento/sucesso')
    } catch (error) {
      toast({
        duration: 9000,
        status: 'error',
        isClosable: true,
        title: 'Erro ao enviar seus dados',
        description: 'Infelizmente encontramos uma instabilidade no envio dos seus dados, mas não se preocupe você pode entrar em contato direto pelo nosso WhatsApp (81 3132-0403) enquanto resolvemos este problema.',
      })
    } finally {
      setLoading(false)
    }
  }

  const submitError = () => {
    toast({
      duration: 9000,
      status: 'error',
      isClosable: true,
      title: 'Dados inválidos...',
      description: 'É preciso informar todos os dados corretamente para poder seguir com o atendimento.',
    })
  }

  /** Component */
  
  return (
    <Box as={'form'} w={'100%'} onSubmit={handleSubmit(submit, submitError)}>
      <FormContainer 
        title='Em que <strong>momento</strong> de compra você está?' 
        subtitle='Conte-nos mais sobre seu momento de compra.'
      >
        <RadioGroup value={moment} onChange={value => setMoment(value)} isDisabled={loading}>
          <Stack>
            <Radio value='1'>
              Estou buscando imóveis na internet e ainda não visitei nenhum
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
        subtitle='Para começar o cálculo precisamos saber o valor da unidade que será financiada.'
      >
        <InputCurrency
          name="valor"
          maxW={'400px'}
          errors={errors}
          control={control}
          isDisabled={loading}
          placeholder={'R$ 0'}
          fontSize={{ base: 'xl', md: '3xl' }}
          register={register("valor", { required: true })} 
          validateMessage="É preciso informar o valor do imóvel"
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
          isDisabled={loading}
          placeholder={'Selecione um estado'}
          validateMessage="É preciso informar o estado"
          register={register("state", { required: true })} 
        />
      </FormContainer>

      <FormContainer 
        title='Quanto você tem para dar de <strong>entrada</strong>?' 
        subtitle='O valor da entrada é decisivo para o financiamento do seu imóvel. A partir dela calculamos o valor a financiar.'
      >
        <InputCurrency
          maxW={'400px'}
          control={control}
          placeholder={'R$ 0'}
          isDisabled={loading}
          name={'availableValor'} 
          fontSize={{ base: 'xl', md: '3xl' }}
          label={'Quanto você tem disponível?'}
          validateMessage="É preciso informar o valor disponível"
          register={register("availableValor", { required: true })} 
        />

        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='use-fgts' mb='0'>
            Pretende usar seu FGTS?
          </FormLabel>
          <Switch 
            size={'lg'} 
            id='use-fgts' 
            isChecked={useFGTS} 
            isDisabled={loading} 
            onChange={e => setUseFGTS(e.target.checked)} 
          />
        </FormControl>

        {useFGTS && (
          <InputCurrency
            maxW={'400px'}
            errors={errors}
            control={control}
            placeholder={'R$ 0'}
            isDisabled={loading}
            name={'availableValorFgts'} 
            fontSize={{ base: 'xl', md: '3xl' }}
            label={'Quanto vai usar do seu FGTS?'}
            register={register("availableValorFgts", { required: true })} 
            validateMessage="É preciso informar o valor que vai usar de FGTS"
          />
        )}
      </FormContainer>

      <FormContainer 
        title='Com quais bancos você possui <strong>relacionamento</strong>?' 
        subtitle='Essa informação é muito importante para agilizar o seu processo de financiamento e através dela conseguimos garantir as melhores taxas para você.'
      >
        <Text color={'secondary.500'}>
          Selecione os bancos que você possui conta:
        </Text>

        <FormBanks {...{ banks, setBanks, isDisabled: loading }} />
      </FormContainer>

      <FormContainer 
        title='Conte-nos sobre sua <strong>idade</strong>, <strong>cpf</strong> e <strong>renda</strong>' 
        subtitle='Sua idade pode influenciar na quantidade de parcelas. O CPF serve para validação das suas informações 
        junto às instituições financeiras. Já a renda mensal serve para cálculo do valor total que você pode financiar.'
      >
        <VStack spacing={{ base: 8, md: 16 }} align={'flex-start'} w={'100%'}>
          <Stack w={'100%'} direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 24 }}>
            <Input
              maxW={'400px'}
              name={'birthday'}
              mask={'99/99/9999'}
              isDisabled={loading}
              placeholder={'DD/MM/AAAA'}
              label={'Quando você nasceu?'}
              fontSize={{ base: 'xl', md: '3xl' }}
              register={register("birthday", { required: true })} 
              validateMessage="É preciso informar a data de nascimento"
            />
            <Input
              name={'cpf'} 
              maxW={'400px'}
              errors={errors}
              isDisabled={loading}
              mask={'999.999.999-99'}
              label={'Qual é o seu CPF?'}
              placeholder={'000.000.000-00'}
              fontSize={{ base: 'xl', md: '3xl' }}
              validateMessage="É preciso informar o CPF"
              register={register("cpf", { required: true })} 
            />
          </Stack>

          <InputCurrency
            maxW={'400px'}
            errors={errors}
            name={'income'} 
            control={control}
            isDisabled={loading}
            placeholder={'R$ 0'}
            fontSize={{ base: 'xl', md: '3xl' }}
            label={'Qual sua renda mensal aproximadamente?'}
            register={register("income", { required: true })} 
            validateMessage="É preciso informar a renda mensal"
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
          name={'name'} 
          errors={errors}
          isDisabled={loading}
          label={'Nome completo'}
          placeholder={'Nome e sobrenome'}
          fontSize={{ base: 'xl', md: '3xl' }}
          validateMessage="É preciso informar pelo menos nome e sobrenome"
          register={register("name", { required: true, validate: isValidName })} 
        />
        <Input
          w={'100%'}
          name={'email'} 
          errors={errors}
          label={'E-mail'}
          isDisabled={loading}
          placeholder={'seuemail@email.com'}
          fontSize={{ base: 'xl', md: '3xl' }}
          validateMessage={'É preciso informar um email'}
          register={register("email", { required: true, validate: isValidEmail })} 
        />
        <Input
          name={'phone'} 
          errors={errors}
          label={'Telefone'}
          isDisabled={loading}
          mask={'(99) 99999-9999'}
          placeholder={'(00) 00000-0000'}
          fontSize={{ base: 'xl', md: '3xl' }}
          validateMessage={'É preciso informar um telefone'}
          register={register("phone", { required: true, validate: isValidPhone })}
        />

        <FormControl>
          <FormLabel as='legend' color={'gray.500'}>
            Gostaria da ajuda gratuita de um de nossos especialistas em financiamento imobiliário?
          </FormLabel>
          <RadioGroup 
            mt={4} 
            size={'lg'} 
            isDisabled={loading}
            value={needContact ? 'S' : 'N'} 
            onChange={value => setNeedContact(value === 'S')}
          >
            <VStack spacing={4} align={'flex-start'}>
              <Radio value='S'>Sim, por favor.</Radio>
              <Radio value='N'>Ainda não. Estou apenas comparando taxas.</Radio>
            </VStack>
          </RadioGroup>
        </FormControl>
      </FormContainer>

      <FormContainer title='<strong>Tudo pronto.</strong><br /> Vamos ver o resultado?' pb={{ base: 24, md: 24 }}>
        <Text sx={{ 'a': { color: 'secondary.500', fontWeight: 'bold' }}}>
          Ao prosseguir você está de acordo com os <Link>Termos de uso</Link> e nossa <Link>Política de privacidade</Link>
        </Text>
        <Button
          type={'submit'}
          isLoading={loading}
          colorScheme={'secondary'}
          w={{ base: '100%', md: '300px' }}
        >
          Simular
        </Button>
      </FormContainer>
    </Box>
  )
}