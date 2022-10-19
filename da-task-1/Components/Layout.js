import React from 'react'
import styles from "../styles/Layout.module.css"
import { Header } from './Header'
export const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <Header/>
            {children}
        </main>
    </div>
  )
}
