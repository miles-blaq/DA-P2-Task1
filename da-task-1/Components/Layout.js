import React from 'react'
import styles from "../styles/Layout.module.css"
import { Meta } from './Meta'
export const Layout = ({children}) => {
  return (
    <>
      <Meta/>
      <div className={styles.container}>
          <main className={styles.main}>
              {children}
          </main>
      </div>
    </>
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