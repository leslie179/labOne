import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftComponent from '@/components/LeftComponent'
import RightComponent from '@/components/RightComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}> 
      <div className={styles.container}>
      <div className={styles.left}>
                <LeftComponent />
            </div>
            <div className={styles.right}>
              <h1 className={styles.h1}>Top Albums</h1>
                <RightComponent />
            </div>
            </div>
      </main>
      <Footer/>
    </>
  )
}
