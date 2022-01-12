/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Script from 'next/script'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Script
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
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
            fbq('init', '598378521207336');
            fbq('track', "PageView");
            fbq('track', 'Purchase', {currency: "BRL", value: 29.90});
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=598378521207336&ev=PageView&noscript=1"
          />
        </noscript>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
