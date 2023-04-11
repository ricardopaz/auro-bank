import Head from 'next/head'

import { Menu } from '@/components/menu'
import { Footer } from '@/components/footer'
import HeroFinder from '@/components/finder/hero'
import { Box, VStack } from '@chakra-ui/react'

const HomeForm: React.FC = () => {
  const redirect = () => {
    window.open('https://api.whatsapp.com/send?phone=558131320403', '_blank')
  }

  return (
    <main>
      <Head>
        <title>AuroBank - Corretor Parceiro</title>
      </Head>
      
      <VStack align={'flex-start'} bg={'primary.700'} spacing={0}>
        <Box
          top={0}
          left={0}
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          backgroundImage={'/hero-movie.gif'}
        />
        <Box zIndex={1}>
          <Menu colorInverse action={redirect} textButton={'Dúvidas? Fale Conosco!'} />
          <HeroFinder />
        </Box>
      </VStack>

      <Footer />
    </main>
  )
}

export default HomeForm
