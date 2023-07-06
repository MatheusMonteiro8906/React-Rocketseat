import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Monteiro</strong>
                            <time dateTime='2023-07-06 00:13:39' title='11 de julho às 08:13'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, parabéns!</p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}