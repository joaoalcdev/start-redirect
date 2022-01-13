/* eslint-disable @next/next/no-script-in-head */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import Head from 'next/head'
import Router from 'next/router'
import Script from 'next/script'
import { GetServerSideProps } from "next"

const Home: React.FC = (props: any) => {
  return <>
    <Head>
      <title> Estamos te redirecionando... </title>
      <meta name="facebook-domain-verification" content="51k0xps7c3tskufq8djv2y1fjcrq5t" />
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
            fbq('track', 'Purchase', {value: "10,00", moeda: 'BRL'});
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
    </Head>
  </>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // redirect test: always redirect to '/login'
  ctx.res.setHeader('Location', 'https://hotm.art/startenglishacademy');
  ctx.res.end();
  Router.replace('https://hotm.art/startenglishacademy');
  return {
    props: {},
  };
};


export default Home