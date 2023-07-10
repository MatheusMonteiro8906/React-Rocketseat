import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './avatar'

export function Posts({ author, publishedAt, }) {  
  return (

      <article className={styles.post}>  
        <header>
         <div className={styles.author}>     
          <Avatar className={styles.author} hasBorder src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong> 
            <span>{author.role}</span> 
          </div>
         </div>
        
        <time dateTime='2023-07-06 00:13:39' title='11 de julho às 08:13'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala pessoal 👋</p>

          <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>  

          <p><a href="">Acesse e deixe seu feedback 👉 devonlane.design</a> </p> 

         <p> <a href="">#uiux #userexperience</a>  </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder='Deixe um comentário'/>
          <footer>
          <button type='submit'>publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
        <Comment/>
        </div>
      </article>
      
      )
}