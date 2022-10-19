
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function interests() {
  return (
    <div>
        <h1 className={styles.title}> My interests</h1>
      <p className={styles.info}> i enjoy playing video games in my free time, i also love to read, code, watch tv shows and spend time with my dog</p>

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
