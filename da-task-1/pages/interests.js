
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { server } from '../config'


export default function interests({data}) {
  return (
    <div>
        <h1 className={styles.title}> My interests </h1>
      <div className={styles.info}>
        <p > I enjoy playing video games in my free time. I also love to </p>
        <ul>
        {data.interests.map((item)=> <li> {item} </li>)}
        </ul>
      </div>
      
      <p className={styles.backButton}> 
        <Link href="/"> 
          <a > Home page
          </a> 
        </Link>
      </p>

      <Image src="/code2.jpg" alt="" width={750} height={400}></Image>
      

      
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/`)
  const data = await res.json()

  return {
    props:{
      data
    }
  }
}