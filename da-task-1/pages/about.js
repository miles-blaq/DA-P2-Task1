import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Layout.module.css"
import { server } from "../config"
import { useRouter } from "next/router"

export default function About({data}) {

  const router = useRouter()

  const submitBtn = async (e) =>{
    e.preventDefault();

    const exp = e.target.experience.value;

    const endpoint = "/api/db/updateUser"

    const options = {
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({
        experience: exp,
      }),
    }
    const res = await fetch(endpoint,options);
    console.log("done")
    const result = await res.json()

    router.reload(window.location.pathname)
  }

  return (
    <main>
        <h1 className={styles.title}> My story and past experiences</h1>
        <div className={styles.info}>
          <p> {data.information} </p>
          <ul> Some of my recent work experiences include; 
            {data.pastExperiences.map((item,index)=> <li key={index}>{item}</li>)}
          </ul>
        </div>

        <form onSubmit={submitBtn} className={styles.updateForm}>
        <label htmlFor="experience">Add experiences:</label> <br />
        <input type="text" name="experience" className={styles.inputt} placeholder="internship at doge empire"/> <br />
        <button type="submit">submit</button>
      </form>

        <div className={styles.backButton}>
          <Link href="/"> 
            <a> Homepage </a> 
          </Link>
        </div>
    </main>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/db/userData`)
  const data = await res.json()

  return {
    props:{
      data: data.users[0]
    }
  }
}