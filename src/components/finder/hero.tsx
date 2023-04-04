import { Text, HStack, VStack } from "@chakra-ui/react"

const HeroFinder = () => {
  return (
    <HStack as={'section'} h={'calc(100vh - 104px)'} px={24} color={'white'}>
      <VStack flex={1} align={'flex-start'}>
        <VStack align={'flex-start'} spacing={'-80px'}>
          <Text fontSize={'9xl'} fontWeight={'black'} color={'secondary.500'}>Você</Text>
          <Text fontSize={'6xl'} fontWeight={'black'}>Corretor(a)!</Text>
        </VStack>
        
        <Text fontSize={24} sx={{ 'b': { color: 'secondary.500' } }}>
          Quer converter mais <b>vendas</b> e <b>aumentar sua renda</b>?
          Se a responsta for <strong>SIM</strong>, não deixe de dar o <strong>PLAY</strong> no vídeo ao lado!
        </Text>
        <Text>
          Essa é uma ótima oportunidade de você fazer parte de um movimento que busca revolucionar o mercado imobiliário.
        </Text>
      </VStack>

      <VStack flex={1}>
      </VStack>
    </HStack>
  )
}

export default HeroFinder