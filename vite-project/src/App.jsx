import  { Posts } from './Post'
import { Header } from './Header'


import styles from './App.module.css'
import './App.css'

export function App() {
 
  return (
    <>
      <Header />


      <div className={styles.wrapper}>
      
        <aside>Sidebar</aside>
      
         <main>

            <Posts 
        author="Matheus"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid corrupti voluptate reiciendis minima nostrum nihil voluptas adipisci laborum ex amet architecto molestias, alias porro. Provident amet maxime veniam nulla!"
            />
            
         </main>
      </div>

    </>
  )
}