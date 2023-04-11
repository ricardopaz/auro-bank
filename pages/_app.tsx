import Head from 'next/head'
import Script from 'next/script'
import Fonts from '../styles/fonts'
import * as fbq from '@/utils/fpixel'
import React, { useEffect } from 'react'

import { theme } from '../styles/theme'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TCLTJMC');
        `}
      </Script>


      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe 
            width="0"
            height="0"
            style={{ display: 'none', visibility: 'hidden' }}
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCLTJMC"
          />
          </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </Head>

      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
