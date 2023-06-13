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
import { Text, Image, Stack, Button, List, ListIcon, ListItem, useToast, Heading, Flex, Radio, RadioGroup, VStack, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'

const advantages = [
  { title: 'Financiamento Imobiliário', message: 'Não se preocupe com a etapa de financiamento, tomamos conta de todo o processo deixando livre seu tempo para vender mais!' },
  { title: 'Canal Multibanco', message: 'Oferecemos uma plataforma de simulação em vários bancos e buscamos a melhor solução para seu cliente.' },
  { title: 'Clientes Satisfeios', message: 'Facilitamos todo o processo, viabilizando sua venda e deixando seu cliente mais satisfeito e pronto para fechar mais negócios.' },
  { title: 'Mais negócios, mais renda!', message: 'Todo cliente que você trouxer e fechar um contrato de financiamento nós pagamos uma comissão.' },
]

const info = [
  { title: 'Como indicar?', message: '<strong>Preencha o formulário acima</strong> que você receberá um <strong>link</strong> e nele terá todo portifólio de produtos da AuroBank, basta selecionar "Financiamento Imobiliário" e preencher os dados do cliente.' },
  { title: 'Como atuamos?', message: 'Partindo dessa indicação voltaremos o contato para buscar mais informações e fazer as simulações para seu cliente.' },
  { title: 'Andamento da proposta', message: 'Depois da indicação, se for do seu interesse, você pode acompanhar todo o processo de perto através do nosso canal do parceiro.' },
]

const HomeForm: React.FC = () => {
  const toast = useToast()
  const router = useRouter()

  const [valor, setValor] = useState<number>(500000)
  const [type, setType] = useState<string>('PRIVATE')
  const [loading, setLoading] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = async (form) => {
    setLoading(true)
    await api.post('/api/finders', { ...form })
    router.push('/finder/resultado')
    setLoading(false)
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
        <title>AuroBank - Corretor Parceiro</title>
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
          filter: 'auto',
          blur: '20px',
          opacity: 0.5,
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
          py={10}
          flex={1} 
          zIndex={2}
          spacing={12}
          justify={'center'}
          borderRadius={'xl'}
          bg={'primary.700'}
          px={{ base: 2, sm: 5 }} 
          mx={{ base: 2, sm: 5, xl: 40 }} 
          my={{ base: 2, sm: 5, xl: 20 }} 
        >
          <Flex borderLeftWidth={2} pl={5} borderColor={'secondary.500'} direction={'column'}>
            <Heading color={'white'} textTransform={'uppercase'} fontSize={{ base: '2xl', md: '3xl' }}>
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
                isDisabled={loading}
                placeholder="Nome *"
                register={register("name", { required: true, validate: isValidName })} 
                validateMessage="É preciso informar nome e sobrenome separados por espaço"
              />
              <Input 
                name="email" 
                type="email"
                color={'white'}
                errors={errors}
                isDisabled={loading}
                placeholder="Email *" 
                validateMessage="Email inválido ou incompleto"
                register={register("email", { required: true, validate: isValidEmail })} 
              />
              <Input 
                name="phone" 
                type="phone"
                color={'white'}
                errors={errors}
                isDisabled={loading}
                mask="(99) 99999-9999"
                placeholder="Telefone (WhatsApp) *"
                validateMessage="Número inválido ou incompleto"
                register={register("phone", { required: true, validate: isValidPhone })} 
              />
            </Stack>
            
            <Button 
              width={'100%'}
              type={'submit'}
              isLoading={loading}
              marginTop={'2.35rem'}
              textTransform={'uppercase'}
            >
              Saiba como!
            </Button>
          </form>

          <List spacing={4} fontSize={14} mt={'24'} zIndex={2}>
            {info.map((info, index) => (
              <ListItem key={`info_${index}`} display={'flex'} flexDirection={'row'} alignItems={'flex-start'}>
                <ListIcon as={IoCheckmarkCircleOutline} color='secondary.500' fontSize={'24px'} />
                <Flex direction={'column'}>
                  <Heading fontSize={20} color={'white'}>{info.title}</Heading>
                  {info.message && <Text color={'white'} opacity={0.6} dangerouslySetInnerHTML={{__html: info.message}} />}
                </Flex>
              </ListItem>
            ))}
          </List>
        </Stack>

        <Stack 
          flex={2} 
          spacing={12}
          position={'relative'} 
          py={{ base: 2, sm: 5, xl: 20 }} 
          pr={{ base: 2, sm: 5, xl: 40 }}
          pl={{ base: 2, sm: 5, xl: 0 }}
        >
          <Stack spacing={{ base: 8, md: 4 }} direction={{ base: 'column', md: 'row' }} align={'center'}>
            <Image src={'logo-2-white.svg'} alt={''} w={'100px'} display={{ base: 'none', md: 'block' }} />
            <Image src={'logo-white.svg'} alt={''} w={'180px'} display={{ base: 'block', md: 'none' }} />

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

          <VStack color={'white'} bg={'primary.700'} borderRadius={'lg'} px={{ base: 10, md: 20 }} py={10} spacing={4}>
            <Text>Se você traz em financiamento:</Text>
            <Heading size={'lg'}>
              {currencyFormatter.format(valor)}
            </Heading>

            <RadioGroup onChange={setType} value={type} colorScheme={'secondary'}>
              <Stack direction='row'>
                <Radio value='PRIVATE'>Banco privado</Radio>
                <Radio value='PUBLIC'>Banco público</Radio>
              </Stack>
            </RadioGroup>

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
              {currencyFormatter.format((type === 'PUBLIC' ? 200 : 250)*(valor/100000))}
            </Heading>

            <VStack>
              <Text fontSize={10}>
                * R$250,00 a cada R$100.000,00 em financiamentos realizados em <strong>bancos privados.</strong>
              </Text>
              <Text fontSize={10}>
                * R$200,00 a cada R$100.000,00 em financiamentos realizados em <strong>bancos públicos.</strong>
              </Text>
            </VStack>
          </VStack>
        </Stack>
      </Stack>

      <Footer />
    </div>
  )
}

export default HomeForm
