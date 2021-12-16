/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from "next"

const Home: React.FC = (props: any) => {
  return <>
    <Head>
      <title> Redirecionando... </title>
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