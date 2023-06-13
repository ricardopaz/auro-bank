import Head from 'next/head';
import api from '@/api/index';
import FinderFormCC from '@/pages/finder/form-cc';
import FinderOnlyPf from '@/pages/finder/form-only-pf';
import FinderFormOther from '@/pages/finder/form-other';
import FinderFormCCOther from '@/pages/finder/form-cc-other';

import { 
  Box,
  Text, 
  Flex,
  Stack, 
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

  const hasCC = products.includes(PRODUCT.CONTA_CORRENTE) 
  const isOnlyCC = products.length === 1 && hasCC

  const hasImobFin = products.includes(PRODUCT.FIN_IMOB) 
  const isOnlyImobFin = products.length === 1 && hasImobFin

  const { name, partner } = router.query
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const submit = (form) => {
    setLoading(true)
    const body = { ...form, finder: name, products, partner }

    const filterBody = Object.keys(body).reduce((map, data) => {
      if (body[data]) map[data] = body[data]
      return map
    }, {})

    api.post('/api/finders/lead', filterBody)
    setStep(3)
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
      <HStack mb={'20px'} alignItems={'center'} gap={{ base: '10px', md: '20px' }}>
        <Image src='/logo-white.svg' alt="" h={{ base: '15px', md: '25px' }} />
        {partner && (
          <>
            <Flex color={'white'} fontSize={'2xl'}>+</Flex>
            <Image src={`/${partner}.png`} alt="" h={{ base: '15px', md: '25px' }} />
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

  return (
    <Stack
      minH={'100vh'} 
      align={'center'}
      justify={'center'}
      overflow={'hidden'}
      bg={'primary.500'}
      spacing={{ base: 8 }} 
      p={{ base: 6, md: 20 }}
      direction={{ base: 'column' }}
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
      <Head>
        <title>Finder Link - {name?.toString()}</title>
      </Head>
      
      {step === 1 && (
        <VStack zIndex={2} spacing={8} maxW={{ base: '100%', md: '460px' }} p={{ md: '30px' }} borderRadius={{ md: '20px' }} boxShadow={{ md: '2xl' }}>
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
        </VStack>
      )}

      {step === 2 && (
        <VStack zIndex={2} spacing={6} maxW={{ base: '100%', md: '460px' }} p={{ md: '30px' }} borderRadius={{ md: '20px' }} boxShadow={{ md: '2xl' }}>
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

            {isOnlyCC && (
              <FinderFormCC register={register} errors={errors} loading={loading} />
            )}

            {!isOnlyImobFin && !isOnlyCC && !hasCC && (
              <FinderFormOther register={register} errors={errors} loading={loading} type={type} setType={setType} />
            )}

            {!isOnlyImobFin && !isOnlyCC && hasCC && (
              <FinderFormCCOther register={register} errors={errors} loading={loading} type={type} setType={setType} />
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
        </VStack>
      )}

      {step === 3 && (
        <VStack zIndex={2} spacing={6} align={'center'} color={'white'} maxW={{ base: '100%', md: '460px' }} p={{ md: '30px' }} borderRadius={{ md: '20px' }} boxShadow={{ md: '2xl' }}>
          <IoCheckmarkCircleOutline size={80} />
          <Heading size={'lg'}>Solicitação Enviada</Heading>
          <Text>
            Agora alguém da nossa equipe irá analisar os dados enviados e entrar em 
            contato com o cliente para resolver a solicitação.
          </Text>

          <Button 
            width={'100%'} 
            onClick={newRequest}
            color={'secondary.500'}
            textTransform={'uppercase'}
            rightIcon={<IoAddOutline />}
          >
            Nova Solicitação
          </Button>
        </VStack>
      )}
    </Stack>
  )
}

export default Finder
