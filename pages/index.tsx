import type { NextPage } from 'next'
import Head from 'next/head'
//components
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="This App is a clone of Facebook; development for HAHS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
     
    </div>
  )
}

export default Home
