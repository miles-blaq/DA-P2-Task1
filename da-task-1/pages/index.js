import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Link from "next/link"

export default function Home({data}) {
  return (
    <div>
     

      <main>
      <h1 className={styles.title}> Hey there, i am miles. </h1>
      {/* <p className={styles.desc}>i am a web developer</p> */}
      <div >
            {/* <h2> my story </h2> */}
      <p className={styles.desc}>i am a web developer</p>
           
            {/* <p>i am a junior web developer, transitioning to web3(solana) dev, this is my first task for doge academy web3 class.</p> */}
            <p> For this Doge academy task i will be introducing myself through a simple webapp created with next.js and mondoDb</p>
          </div>
      <div className={styles.grid}>
         
          
          <div className={styles.card}> 
          <Link  href="/interests">
            <a> 
            <h2>My interests </h2>
              <p className={styles.truncate}> enjoy playing video games in my free time, i also love to read, code, watch tv shows and spend time with my dog</p>
            </a>
            </Link>
          </div>

          <div className={styles.card}>
            
          <Link  href="/about">
            <a> 
            <h2> My story and past experiences</h2>
            <p className={styles.truncate}> i having been coding on and off for a few years now, not having it be my full time job has caused a consistency problem, but now that i plan to go fulltime web3, i will be giving it my all and contributing by building cool stuff that helps the ecosystem</p>
            </a>
          </Link>
          </div>
      </div>
      </main>
      {/* <Image src="/code1.jpg" alt="" width={400} height={400}></Image> */}
    </div>
  )
}


