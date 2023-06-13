import Head from 'next/head'
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/form/input'
import { isValidName } from '@/utils/validators'
import { Button, Heading, Image, Link, Text, useToast, VStack } from '@chakra-ui/react'

const NewFinder: React.FC = () => {
  const toast = useToast()
  const [link, setLink] = useState<string>()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (form) => {
    setLink(`${process.env.NEXT_PUBLIC_URL}/finder/${form.name.replaceAll(' ', '%20')}`)
  }

  const submitError = () => {
    toast({
      duration: 9000,
      status: 'error',
      isClosable: true,
      title: 'Validação',
      description: "É preciso informar o nome corretamente para poder gerar o link.",
    })
  }

  const copyLink = () => {
    navigator.clipboard.writeText(link).then(function() {
      toast({
        duration: 9000,
        isClosable: true,
        status: 'success',
        title: 'Copiar Link',
        description: "Link copiado com sucesso!",
      })
    }, function(err) {
      console.error(err)
      toast({
        duration: 9000,
        status: 'error',
        isClosable: true,
        title: 'Copiar Link',
        description: "Não foi possível copiar o link, tente novamente.",
      })
    });
  }
  
  return (
    <VStack
      spacing={8} 
      minH={'100vh'} 
      align={'center'}
      justify={'center'}
      bg={'primary.500'}
      overflow={'hidden'}
      p={{ base: 6, md: 20 }}
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
        <title>Finder Link</title>
      </Head>

      <Image  zIndex={2} src='/logo-white.svg' alt="" h={'20px'} />
      
      <VStack zIndex={2} maxW={'400px'} spacing={8}>
        <VStack>
          <Heading color={'white'} textTransform={'uppercase'}>Finder Link</Heading>
          <Text color={'white'} textAlign={'center'}>
            Informe o nome do finder e clique em &quot;Gerar Link&quot; para copiar o 
            link do finder e compartilhar com o mesmo.
          </Text>
        </VStack>

        <VStack as={'form'} w={'100%'} spacing={8} onSubmit={handleSubmit(submit, submitError)}>
          <Input 
            name="name"
            errors={errors}
            color={'white'}
            label={'Nome do Finder'}
            borderColor={'secondary.500'}
            placeholder="Nome e sobrenome"
            register={register("name", { required: true, validate: isValidName })} 
            validateMessage="É preciso informar nome e sobrenome separados por espaço"
          />
          <Button width={'100%'} type={'submit'} textTransform={'uppercase'}>
            Gerar Link
          </Button>
        </VStack>


        {link && (
          <VStack color={'white'}>
            <Text>Clique abaixo para copiar o link:</Text>
            <Link onClick={copyLink} color={'secondary.500'}>{link}</Link>
          </VStack>
        )}
      </VStack>

    </VStack>
  )
}

export default NewFinder