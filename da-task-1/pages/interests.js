
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { server } from '../config'
// import { useRouter } from 'next/router'


export default function interests({data}) {
  // const router = useRouter()

  const submitBtn = async (e) =>{
    e.preventDefault();

    const info = e.target.hobby.value;

    const endpoint = "/api/db/updateUser"

    const options = {
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({
        hobby: info,
      }),
    }
    const res = await fetch(endpoint,options);
    console.log("done")
    const result = await res.json()

    // router.reload(window.location.pathname)
  }

  return (
    <div>
        <h1 className={styles.title}> My interests </h1>
      <div className={styles.info}>
        <p > I enjoy playing video games in my free time. I also love to </p>
        <ul>
        {data.interests.map((item, index)=> <li key={index}> {item} </li>)}
        </ul>
      </div>

      <form onSubmit={submitBtn} className={styles.updateForm}>
        <label htmlFor="hobby">Add hobbies:</label> <br />
        <input type="text" name="hobby" className={styles.inputt} placeholder="Flipping nfts like a proper degen"/> <br />
        <button type="submit">submit</button>
      </form>

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

// export const getStaticProps = async () =>{
//   const res = await fetch(`${server}/api/`)
//   const data = await res.json()

//   return {
//     props:{
//       data
//     }
//   }
// }

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/db/userData`)
  const data = await res.json()

  return {
    props:{
      data: data.users[0]
    }
  }
}

