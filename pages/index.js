import React from 'react';
import Head from 'next/head';
import Api from '../api/Api';

export default function Home() {
  return (
    <>
    <Head>
      <title>Dogs - Rede social para cachorros.</title>
      <meta content='Dogs - Rede social para cachorros'/>
    </Head>

    <Api />
    </>
  )
}
