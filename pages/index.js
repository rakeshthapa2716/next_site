import Head from 'next/head'
import { data } from '../Component/data'
import Header from '../Component/Header'
import Service from '../Component/Service'
import UserInfo from '../Component/UserInfo'

 function Home({service}) {
  return (
       <>
      <Head>
        <title>Next_Portfolio</title>
        <meta name="description" content="this website is the best in the world feat CM PUNK" />
      </Head>
       <Header />
       <Service service={service}/>
       <UserInfo />
       </>
  )
}
export default Home;

export const getStaticProps = async ()=> {
   const service = data;
   return{
     props: { service },
   }
}