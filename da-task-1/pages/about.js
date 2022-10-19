import Image from "next/image"
import Link from "next/link"
// import styles from "../styles/about.module.css"
import styles from "../styles/Layout.module.css"


export default function about() {
  return (
    <main>
        <h1 className={styles.title}> My story and past experiences</h1>
        {/* <p> i having been coding on and off for a few years now,</p>
        <p>  not having it be my full time job has caused a consistency problem,</p>
        <p> but now that i plan to go fulltime web3, i will be giving it my all and contributing by building cool stuff that helps the ecosystem</p>
        <p> intern at a cyber department of government ministry in my country</p>
        <p> pet project with include an instagram clone, netflix clone and e-commerce store complete with payment systems</p>  */}
        {/* i having been coding on and off for a few years now,not having it be my full time job has caused a consistency problem,but now that i plan to go fulltime web3, i will be giving it my all and contributing by building cool stuff that helps the ecosystem */}
        
        <div className={styles.info}>
          <p>
          i having been coding on and off for a few years now,not having it be my full time job has caused a consistency problem,but now that i plan to go fulltime web3, i will be giving it my all and contributing by building cool stuff that helps the ecosystem
          </p>
          <ul> Some of my recent work experiences include; 
            <li>Internship at a cyber department of a government ministry in my country</li>
            <li>Pet project which include an instagram clone, netflix clone and e-commerce store complete with payment systems</li>
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
