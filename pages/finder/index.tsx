import Head from 'next/head'
import api from '@/api/index'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Footer } from '@/components/footer'
import { Input } from '@/components/form/input'
import { currencyFormatter } from '@/utils/formatter'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { isValidName, isValidPhone, isValidEmail } from '@/utils/validators'
import { Text, Image, Stack, Button, List, ListIcon, ListItem, useToast, Heading, Flex, Radio, RadioGroup, FormControl, FormLabel, HStack, VStack, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'

const advantages = [
  { title: 'Financiamento Imobiliário', message: 'Não se preocupe com a etapa de financiamento, tomamos conta de todo o processo deixando livre seu tempo para vender mais!' },
  { title: 'Canal Multibanco', message: 'Oferecemos uma plataforma de simulação em vários bancos e buscamos a melhor solução para seu cliente.' },
  { title: 'Clientes Satisfeios', message: 'Facilitamos todo o processo, viabilizando sua venda e deixando seu cliente mais satisfeito e pronto para fechar mais negócios.' },
  { title: 'Mais negócios, mais renda!', message: 'Todo cliente que você trouxer e fechar um contrato de financiamento nós pagamos uma comissão.' },
]

const HomeForm: React.FC = () => {
  const toast = useToast()
  const router = useRouter()

  const [valor, setValor] = useState<number>(500000)
  const [hasClients, setHasClients] = useState<boolean>(false)
  const [clientsType, setClientsType] = useState<string>('PJ')

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (form) => {
    api.post('/api/finders', { ...form, hasClients, clientsType })
    router.push('/finder/resultado')
  }

  const submitError = () => {
    toast({
      duration: 9000,
      status: 'error',
      isClosable: true,
      title: 'Dados inválidos',
      description: "É preciso informar todos os dados corretamente para poder seguir com o atendimento.",
    })
  }

  return (
    <div>
      <Head>
        <title>Marco Zero Bank - Seja um Parceiro</title>
      </Head>
      
      <Stack 
        id="form"
        minH={'100vh'}
        bg={'primary.500'}
        overflow={'hidden'}
        spacing={{ base: 2, xl: 6 }} 
        direction={{ base: 'column-reverse', xl: 'row' }}
        _before={{
          content: '""',
          top: 0,
          left: 0,
          opacity: 0.3,
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundImage: '/bg.jpg',
          backgroundPosition: '50% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack 
          flex={1} 
          zIndex={2}
          spacing={12}
          justify={'center'}
          borderRadius={'xl'}
          bg={'primary.700'}
          px={{ base: 2, sm: 10 }} 
          mx={{ base: 2, sm: 10, xl: 40 }} 
          my={{ base: 5, sm: 10, xl: 20 }} 
          py={{ base: 5, sm: 10, xl: 10 }}
        >
          <Flex borderLeftWidth={2} pl={5} borderColor={'secondary.500'} direction={'column'}>
            <Heading color={'white'} textTransform={'uppercase'}>
              Você CORRETOR(A)!
            </Heading>
            <Text color={'white'} sx={{ 'strong': { color: 'secondary.500' } }}>
              Não perca tempo e conheça as vantagens de ser parceiro(a) <strong>AuroBank</strong>!
            </Text>
          </Flex>

          <form onSubmit={handleSubmit(submit, submitError)}>
            <Stack spacing="0.62rem">
              <Input 
                name="name" 
                color={'white'}
                errors={errors}
                placeholder="Nome *"
                register={register("name", { required: true, validate: isValidName })} 
                validateMessage="É preciso informar nome e sobrenome separados por espaço"
              />
              <Input 
                name="email" 
                type="email"
                color={'white'}
                errors={errors}
                placeholder="Email *" 
                validateMessage="Email inválido ou incompleto"
                register={register("email", { required: true, validate: isValidEmail })} 
              />
              <Input 
                name="phone" 
                type="phone"
                color={'white'}
                errors={errors}
                mask="(99) 99999-9999"
                placeholder="Telefone (WhatsApp) *"
                validateMessage="Número inválido ou incompleto"
                register={register("phone", { required: true, validate: isValidPhone })} 
              />
              <Input 
                name="linkedin"
                color={'white'}
                placeholder="Linkedin"
                register={register("linkedin", { required: false })}
              />

              <FormControl color={'white'} pt={4}>
                <FormLabel>Possui carteira de clientes?</FormLabel>
                <RadioGroup 
                  value={hasClients ? 'S' : 'N'}
                  onChange={value => setHasClients(value === 'S')} 
                >
                  <Stack direction='row' spacing={4}>
                    <Radio value='S'>Sim</Radio>
                    <Radio value='N'>Não</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              {hasClients && (
                <FormControl color={'white'} pt={4}>
                  <FormLabel>A carteira é de?</FormLabel>
                  <RadioGroup value={clientsType} onChange={value => setClientsType(value)}>
                    <Stack direction='row' spacing={4}>
                      <Radio value='PJ'>PJ</Radio>
                      <Radio value='PF'>PF</Radio>
                      <Radio value='Ambos'>Ambos</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              )}
            </Stack>
            
            <Button 
              width={'100%'}
              type="submit"
              marginTop="2.35rem"
              textTransform={'uppercase'}
            >
              Iniciar Parceria
            </Button>
          </form>
        </Stack>

        <Stack 
          flex={2} 
          spacing={12}
          position={'relative'} 
          py={{ base: 10, xl: 20 }} 
          pr={{ base: 10, xl: 40 }}
          pl={{ base: 10, xl: 0 }}
        >
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }} align={'center'}>
            <Image src={'logo-2-white.svg'} alt={''} w={'100px'} />

            <Flex borderLeftWidth={1} pl={5} borderColor={'secondary.500'} direction={'column'}>
              <Heading color={'white'} textTransform={'uppercase'} fontSize={{ base: '2xl', md: '3xl' }}>
                Vantagens<br />de ser um parceiro
              </Heading>
              <Text color={'white'}>
                Aumente suas vendas e sua renda!
              </Text>
            </Flex>
          </Stack>

          <List spacing={4} fontSize={14} mt={'24'} zIndex={2}>
            {advantages.map((adv, index) => (
              <ListItem key={`adv_${index}`} display={'flex'} flexDirection={'row'} alignItems={'flex-start'}>
                <ListIcon as={IoCheckmarkCircleOutline} color='secondary.500' fontSize={'24px'} />
                <Flex direction={'column'}>
                  <Heading fontSize={20} color={'white'}>{adv.title}</Heading>
                  {adv.message && <Text color={'white'} opacity={0.6} dangerouslySetInnerHTML={{__html: adv.message}} />}
                </Flex>
              </ListItem>
            ))}
          </List>

          <VStack color={'white'} bg={'primary.700'} borderRadius={'lg'} px={{ base: 10, md: 20 }} py={10}>
            <Text>Se você vende:</Text>
            <Heading size={'lg'}>
              {currencyFormatter.format(valor)}
            </Heading>

            <Slider 
              min={100000} 
              step={100000}
              max={10000000} 
              defaultValue={valor} 
              onChange={v => setValor(v)}
            >
              <SliderTrack bg='secondary.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='primary' />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
            <Text>você recebe:</Text>
            <Heading size={'2xl'}>
              {currencyFormatter.format(250*(valor/100000))}
            </Heading>
            <Text fontSize={10}>
              * R$250,00 a cada R$100.000,00 em financiamentos realizados
            </Text>
          </VStack>
          
          <Image 
            alt={''}
            right={0} 
            zIndex={1}
            h={'400px'} 
            opacity={0.1} 
            w={'fit-content'} 
            bottom={'-100px'} 
            m={'0!important'} 
            src={'abstr-1.png'} 
            position={'absolute'} 
          />
        </Stack>
      </Stack>

      <Footer />
    </div>
  )
}

export default HomeForm
