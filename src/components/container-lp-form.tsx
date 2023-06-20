import { Stack } from "@chakra-ui/react"

export const ContainerLp = ({ children }) => {
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
      {children}
    </Stack>
  )
}