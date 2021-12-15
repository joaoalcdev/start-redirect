/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

const Home: React.FC = (props: any) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const { pathname } = Router
    // conditional redirect
    if (pathname == '/') {
      // router.push
      Router.replace('https://hotm.art/startenglishacademy')
    } else {
      setLoaded(true)
    }
  }, []);

  if (!loaded) {
    return <>
      <Head>
        <title> Redirecionando... </title>
      </Head>
      {/* <h1>carregando</h1> */}
    </>
  }
  return (
    <>
      <Head>
        <title> Falha ao carregar... </title>
      </Head>
      <h1>falha ao carregar</h1>
    </>
  )
}

export default Home