import Head from "next/head";

import { Menu } from "../src/components/menu";
import { About } from "../src/pages/home-finance/about";
import { Hero } from "../src/pages/home-finance/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auro Bank - Financiamento Imobiliário</title>
      </Head>

      <main>
        <Menu />
        <Hero />
        <About />
      </main>
    </>
  )
}
