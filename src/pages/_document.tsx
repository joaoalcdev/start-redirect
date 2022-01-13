/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getServerSideProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta name="facebook-domain-verification" content="51k0xps7c3tskufq8djv2y1fjcrq5t" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          {/*  Description Tags  */}
          <meta
            property="og:title"
            content="Érika Gondim - Site Oficial"
          ></meta>
          <meta name="instagram:title" content="Érika Gondim"></meta>
          <meta name="youtube:title" content="Érika Gondim"></meta>
          <meta name="facebook:title" content="Érika Gondim"></meta>
          <meta name="twitter:title" content="Érika Gondim"></meta>
          <meta name="linkedin:title" content="Érika Gondim"></meta>
          <link rel="icon" href="/favicon.ico" /> {/* Icon - Website */}
          {/*  Description  */}
          <meta
            name="description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            itemProp="description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            property="og:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            name="instagram:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            name="youtube:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            name="facebook:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            name="twitter:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          <meta
            name="linkedin:description"
            content="Criadora do programa Start - English Academy®."
          ></meta>
          {/*  Site URL  */}
          {/* Links */}
          <link rel="canonical" href="https://www.erikagondim.com.br"></link>
          <meta
            property="og:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            name="instagram:site"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            name="youtube:site"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            name="facebook:site"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            name="twitter:site"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            name="linkedin:site"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            property="instagram:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            property="youtube:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            property="facebook:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            property="twitter:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          <meta
            property="linkedin:url"
            content="https://www.erikagondim.com.br"
          ></meta>
          {/*  Theme Color Global */}
          <meta name="theme-color" content="#5600E1"></meta>
          <meta name="msapplication-TileColor" content="#5600E1"></meta>
          <meta name="msapplication-navbutton-color" content="#5600E1"></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#5600E1"
          ></meta>
          {/*  Share Image Size  */}
          <meta property="og:locale" content="pt_BR"></meta>
          <meta property="og:image:type" content="../public/favicon.ico"></meta>
          <meta property="og:image:width" content="1920"></meta>
          <meta property="og:image:height" content="1080"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:card" content="summary_large_image"></meta>
          <meta property="instagram:card" content="summary_large_image"></meta>
          <meta property="youtube:card" content="summary_large_image"></meta>
          <meta property="facebook:card" content="summary_large_image"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="linkedin:card" content="summary_large_image"></meta>
          {/*  Share Image URL  */}
          <meta name="image" content="../public/favicon.ico"></meta>
          {/* <meta itemprop="image" content="../public/favicon.ico"></meta> */}
          <meta property="og:image" content="../public/favicon.ico"></meta>
          <meta name="youtube:image" content="../public/favicon.ico"></meta>
          <meta name="instagram:image" content="../public/favicon.ico"></meta>
          <meta name="facebook:image" content="../public/favicon.ico"></meta>
          <meta name="twitter:image" content="../public/favicon.ico"></meta>
          <meta name="linkedin:image" content="../public/favicon.ico"></meta>
          {/*  Site Name  */}
          <meta name="author" content="Érika Gondim"></meta>
          {/* <meta itemprop="name" content="Érika Gondim"></meta> */}
          <meta name="instagram:site" content="Érika Gondim"></meta>
          <meta name="youtube:site" content="Érika Gondim"></meta>
          <meta name="facebook:site" content="Érika Gondim"></meta>
          <meta name="twitter:site" content="Érika Gondim"></meta>
          <meta name="linkedin:site" content="Érika Gondim"></meta>
          <meta name="article:author" content="Érika Gondim"></meta>
          <meta name="application-name" content="Érika Gondim"></meta>
          <meta property="og:site_name" content="Érika Gondim"></meta>
          <meta name="apple-mobile-web-app-title" content="Érika Gondim"></meta>
          {/*  Favicons  */}
          <link rel="icon" href="favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicon-64x64.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="apple-touch-icon-60x60.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="apple-touch-icon-72x72.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="apple-touch-icon-76x76.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="apple-touch-icon-114x114.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="apple-touch-icon-120x120.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="apple-touch-icon-144x144.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="apple-touch-icon-152x152.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon-180x180.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="favicon-194x194.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="android-chrome-192x192.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          ></link>
          <link
            rel="mask-icon"
            href="safari-pinned-tab.svg"
            color="#5600E1"
          ></link>
          <meta
            name="msapplication-TileImage"
            content="mstile-144x144.png"
          ></meta>
          <meta name="msapplication-config" content="browserconfig.xml"></meta>
          {/*  Manifest  */}
          <link rel="manifest" href="site.webmanifest"></link>
          {/* chatSet */}
          <meta charSet="utf-8" />
          {/* Fonts Import */}
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <head>
          <meta name="facebook-domain-verification" content="51k0xps7c3tskufq8djv2y1fjcrq5t" />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
