import type { NextPage } from 'next'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
//auth
import { getSession } from 'next-auth/client'
//components
import Header from '../components/Header'
import Login from '../components/Login'

const Home: NextPage = ({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
 
  if(!session) return <Login />
  
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


export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get the user
  const session = await getSession(context)

  return {
    props: {
      session
    },
  }
}

export default Home
