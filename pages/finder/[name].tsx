import Head from 'next/head';
import api from '@/api/index';
import FinderOnlyPf from '@/pages/finder/form-only-pf';
import FinderFormOther from '@/pages/finder/form-other';

import { 
  Box,
  Text, 
  Flex,
  Image, 
  VStack,
  HStack,
  Button,
  Heading, 
  useToast,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { PRODUCT, PRODUCTS_LABELS } from '@/utils/constants';
import { ContainerLp } from '@/components/container-lp-form';
import { SelectProduct } from '@/pages/finder/select-product';
import { IoAddOutline, IoCheckmarkCircleOutline, IoChevronForwardOutline } from 'react-icons/io5';

const Finder: React.FC = () => {
  const toast = useToast()
  const router = useRouter()
  
  const [step, setStep] = useState<number>(1)
  const [type, setType] = useState<string>('PJ')
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<string[]>([])
  
  const isDisabled = products.length === 0

  const hasImobFin = products.includes(PRODUCT.FIN_IMOB) 
  const isOnlyImobFin = products.length === 1 && hasImobFin

  const { name, partner } = router.query
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const submit = async (form) => {
    setLoading(true)
    const body = { ...form, finder: name, products, partner }

    const filterBody = Object.keys(body).reduce((map, data) => {
      if (body[data]) map[data] = body[data]
      return map
    }, {})

    const { status } = await api.post('/api/finders/lead', filterBody)

    if (status === 200) {
      setStep(3)
    } else {
      toast({
        duration: 9000,
        status: 'error',
        isClosable: true,
        title: 'Erro no envio dos dados',
        description: 'Por favor, tente novamente e caso o erro persista entre em contato com nossa equipe técnica.',
      })
    }

    setLoading(false)
  }

  const newRequest = () => {
    reset()
    setProducts([])
    setStep(1)
  }

  const submitError = () => {
    toast({
      duration: 9000,
      status: 'error',
      isClosable: true,
      title: 'Dados inválidos',
      description: "É preciso informar todos os dados corretamente para poder seguir com a solicitação.",
    })
  }

  const Header: React.FC = () => (
    <>
      <HStack mb={'20px'} alignItems={'center'} justifyContent={'center'} gap={{ base: '10px', md: '20px' }}>
        <Image src='/logo-white.svg' alt="" h={'1.5rem'} />
        {partner && (
          <>
            <Flex color={'white'} fontSize={'2xl'}>+</Flex>
            <Image src={`/${partner}.png`} alt="" h={'1.5rem'} />
          </>
        )}
      </HStack>
      <VStack align={'flex-start'} alignSelf={'flex-start'}>
        <Heading color={'white'} textTransform={'uppercase'}>
          Olá, {name}!
        </Heading>
        <Text color={'white'}>
          {step === 1 && 'Selecione os produtos para solicitar o cadastro:'}
          {step === 2 && 'Agora informe os dados para a solicitação:'}
        </Text>
      </VStack>
    </>
  )

  const Step1 = () => (
    <>
      <Header />
      <SelectProduct products={products} setProducts={setProducts} />
      <Button 
        width={'100%'} 
        isDisabled={isDisabled}
        onClick={() => setStep(2)}
        textTransform={'uppercase'}
        opacity={isDisabled ? 0.3 : 1}
        rightIcon={<IoChevronForwardOutline />}
      >
        Próximo
      </Button>
    </>
  )

  const Step2 = () => (
    <>
      <Header />

      <VStack w={'100%'} color={'white'} align={'flex-start'}>
        <Text>Produtos selecionados:</Text>
        <UnorderedList color={'white'} fontWeight={'bold'}>
          {products.map(product => (
            <ListItem key={`product_${product}`} ml={'20px'}>
              {PRODUCTS_LABELS[product]}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>

      <Box as={'form'} w={'100%'} onSubmit={handleSubmit(submit, submitError)}>
        {isOnlyImobFin && (
          <FinderOnlyPf register={register} errors={errors} loading={loading} />
        )}

        {!isOnlyImobFin && (
          <FinderFormOther register={register} errors={errors} loading={loading} type={type} setType={setType} />
        )}

        <Button 
          width={'100%'}
          type={'submit'}
          color={'primary.500'}
          isLoading={loading}
          marginTop={'2.35rem'}
          textTransform={'uppercase'}
        >
          Solicitar
        </Button>

        <Button mt={'20px'} width={'100%'} onClick={() => setStep(1)} variant={'outline'} colorScheme={'whiteAlpha'} borderColor={'white'} color={'white'}>
          Adicionar mais produtos
        </Button>
      </Box>
    </>
  )

  const Step3 = () => (
    <>
      <IoCheckmarkCircleOutline size={80} />
      <Heading size={'lg'}>Solicitação Enviada</Heading>

      <Text>
        Agora alguém da nossa equipe irá analisar os dados enviados e entrar em 
        contato com o cliente para resolver a solicitação.
      </Text>

      <Button 
        width={'100%'} 
        onClick={newRequest}
        color={'primary.500'}
        textTransform={'uppercase'}
        rightIcon={<IoAddOutline />}
      >
        Nova Solicitação
      </Button>
    </>
  )

  return (
    <ContainerLp>
      <Head>
        <title>Finder Link</title>
      </Head>
      
      <VStack 
        zIndex={2} 
        spacing={8}
        color={'white'} 
        p={{ md: '30px' }} 
        boxShadow={{ md: '2xl' }}
        borderRadius={{ md: '20px' }} 
        align={step === 3 && 'center'} 
        maxW={{ base: '100%', md: '460px' }} 
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </VStack>
    </ContainerLp>
  )
}

export default Finder
