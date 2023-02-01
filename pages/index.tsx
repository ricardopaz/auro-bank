import Head from "next/head";

import { VStack } from "@chakra-ui/react";
import { Menu } from "../src/components/menu";
import { Footer } from "../src/components/footer";
import { CTA } from "../src/pages/home-finance/cta";
import { Hero } from "../src/pages/home-finance/hero";
import { Steps } from "../src/pages/home-finance/steps";
import { Banks } from "../src/pages/home-finance/banks";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  const redirect = () => {
    router.push('/financiamento/simulacao')
  }

  return (
    <>
      <Head>
        <title>AuroBank - Financiamento Imobiliário</title>
        <meta name="facebook-domain-verification" content="to94s0qhpodm121cmyj4w9m9wzb8dg" />
      </Head>

      <VStack as={'main'} w={'100%'} spacing={0} overflow={'hidden'}>
        <Menu action={redirect} textButton={'Simule seu financiamento'} />
        <Hero />
        <Steps />
        <CTA />
        <Banks />
        <Footer />
      </VStack>
    </>
  )
}
