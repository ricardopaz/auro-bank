import Head from "next/head";

import { Menu } from "../src/components/menu";
import { CTA } from "../src/pages/home-finance/cta";
import { Hero } from "../src/pages/home-finance/hero";
import { Steps } from "../src/pages/home-finance/steps";
import { Banks } from "../src/pages/home-finance/banks";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auro Bank - Financiamento Imobiliário</title>
      </Head>

      <VStack as={'main'} w={'100%'} spacing={0} overflow={'hidden'}>
        <Menu />
        <Hero />
        <Steps />
        <CTA />
        <Banks />
      </VStack>
    </>
  )
}
