import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Layout.module.css"
import { server } from "../config"


export default function about({data}) {
  return (
    <main>
        <h1 className={styles.title}> My story and past experiences</h1>
        <div className={styles.info}>
          <p> {data.information} </p>
          <ul> Some of my recent work experiences include; 
            {data.pastExperiences.map((item)=> <li>{item}</li>)}
          </ul>
        </div>
        
        <div className={styles.backButton}>
          <Link href="/"> 
            <a> Homepage </a> 
          </Link>
        </div>
        {/* <Image src="/climb.jpg" alt="" width={750} height={400}></Image> */}
    </main>
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
