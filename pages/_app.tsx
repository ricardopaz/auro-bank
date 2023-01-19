import React from 'react'
import Head from 'next/head'
import Fonts from '../styles/fonts'

import { theme } from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
