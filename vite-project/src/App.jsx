import  { Posts } from './Post'
import { Header } from './Header'
import { Sidebar } from './sidebar'

import styles from './App.module.css'
import './App.css'

  const posts = [
    {
      id: 1,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/41351829?v=4',
          name: 'Matheus Monteiro',
          role: 'Dev @ ServiceUp'
      },
      content: [{type: 'paragraph', content: 'Fala pessoal👋'},
                {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
                {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-07-07 15:10:00 '),
    },
    {
      id: 2,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/41351829?v=4',
          name: 'Matheus Monteiro',
          role: 'Dev @ ServiceUp'
      },
      content: [{type: 'paragraph', content: 'Fala pessoal👋'},
                {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
                {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-07-07 15:10:00 '),
    },
  ]

export function App() {
 
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
      
        <Sidebar />
      
         <main>

          {posts.map(post =>{
            return( 
           
              <Posts
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
            />)
          })}
        
         </main>
      </div>

    </>
  )
}