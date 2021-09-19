import type { NextPage } from 'next'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
//auth
import { getSession } from 'next-auth/client'
//components
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgest from '../components/Widgest'
//firebase
import { db } from '../firebase'

const Home: NextPage = ({ session, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
 
  if(!session) return <Login />

  console.log("posts: ", posts)
  
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="This App is a clone of Facebook; development for HAHS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='flex'>
        <SideBar />
        <Feed  posts={posts}/>
        <Widgest />
      </main>
     
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get the user
  const session = await getSession(context)

  const posts = await db.collection('posts').orderBy('timestamp','desc').get()

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs
    },
  }
}

export default Home
