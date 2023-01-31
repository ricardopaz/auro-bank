import React from 'react'

import { VContainer } from './v-container'
import { Text, Stack, Divider, ButtonGroup, IconButton, Image, Flex } from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook, IoMailOutline, IoLogoWhatsapp, IoLocationOutline } from 'react-icons/io5'

export const Footer: React.FC = () => {
  return (
    <VContainer as={'footer'} w={'100%'} align={'flex-start'} bg={'primary.700'} color={'white'} py={16}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 6, md: 0 }} align={'center'}>
        <Stack flex={1} spacing={{ base: '6', md: '8' }} align="start">
          <Image src={'/logo-white.svg'} alt={''} h={'30px'} />
          <Text fontSize={'sm'} fontWeight={200}>
            Somos correspondente bancário e seguimos as diretrizes do BACEN, nos termos da Resolução n° 3.954 
            de 24 de fevereiro de 2011. Sempre nos compometendo com a transparência e oferta da melhor 
            solução para o cliente.
          </Text>
        </Stack>

        <Stack flex={1} spacing={0} direction={'column'}>
          <FooterLink Icon={IoMailOutline} text="contato@aurobank.com.br" />
          <FooterLink Icon={IoLogoWhatsapp} text="(81) 3132-0403" link="https://api.whatsapp.com/send?phone=558131320403" />
          <FooterLink 
            Icon={IoLocationOutline} 
            text="Av. Fernando Simões Barbosa, 266 - 12 andar, sala 1202 - Boa Viagem, Recife/PE" 
          />
        </Stack>
      </Stack>

      <Divider />

      <Stack
        w={'100%'}
        align="center"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Text fontSize="sm" sx={{ 'b': { color: 'secondary.500' } }}>
          Copyright &copy; {new Date().getFullYear()} <b>Auro Bank</b>. Todos os direito reservados.
        </Text>

        <ButtonGroup variant={'ghost'} colorScheme={'primary'}>
          <IconButton
            as={'a'}
            color={'white'}
            target={'_blank'}
            aria-label={'LinkedIn'}
            icon={<IoLogoLinkedin fontSize={'1.25rem'} />}
            href={'https://www.linkedin.com/company/aurobank'}
          />
          <IconButton 
            as={'a'}
            color={'white'}
            target={'_blank'}
            aria-label={'Instagram'}
            href={'https://www.instagram.com/aurobank_'}
            icon={<IoLogoInstagram fontSize={'1.25rem'} />} 
          />
          <IconButton 
            as={'a'}
            color={'white'}
            target={'_blank'}
            aria-label={'Facebook'} 
            href={'https://www.facebook.com/aurobank_'}
            icon={<IoLogoFacebook fontSize={'1.25rem'} />} 
          />
        </ButtonGroup>
      </Stack>
    </VContainer>
  )
}

interface FooterLinkProps {
  Icon: any
  text: string
  link?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ Icon, text, link }) => {
  const openLink = () => {
    if (link) {
      window.open(link, '_blank');
    }
  }

  return (
    <Flex align="center">
      <Flex
        h="2.5rem"
        w="2.81rem"
        align="center"
        justify="center"
      >
        <Icon size="1.37rem" />
      </Flex>
      <Text 
        ml="0.75rem"
        fontWeight={500}
        onClick={openLink}
        fontSize="0.875rem"
        w="-webkit-fill-available"
        cursor={link ? 'pointer' : null}
      >
        {text}
      </Text>
    </Flex>
  )
}
