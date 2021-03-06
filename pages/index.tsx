import type { NextPage } from 'next'
import Head from 'next/head'
import { Developing } from '../components/Developing/Developing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rudenko Bogdan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Здарова)))</h3>
        <Developing />
      </main>
    </div>
  )
}

export default Home;
