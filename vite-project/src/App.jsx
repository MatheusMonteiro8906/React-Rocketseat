import  { Posts } from './Post'
import { Header } from './Header'
import { Sidebar } from './sidebar'

import styles from './App.module.css'
import './App.css'

export function App() {
 
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
      
        <Sidebar />
      
         <main>

         <Posts/>
         <Posts/>

         </main>
      </div>

    </>
  )
}