/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

const Redirect = (props: any) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const { pathname } = Router
    // conditional redirect
    if (pathname == '/') {
      // router.push
      Router.replace('https://www.google.com')
    } else {
      setLoaded(true)
    }
  }, []);

  if (!loaded) {
    return <>
      <Head>
        <title> Redirecionando... </title>
        <h1>carregando</h1>
      </Head>
    </>
  }
  return (
    <>
      <Head>
        <title> Falha ao carregar... </title>
        <h1>falha ao carregar</h1>
      </Head>
    </>
  )
}

export default Redirect