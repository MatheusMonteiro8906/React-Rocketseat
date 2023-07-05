import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
                Sidebar
          
            <img className={styles.cover} src="https://images.unsplash.com/photo-1688413708929-8b2d281803df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={styles.profile}>
            
                <strong> Matheus Monteiro </strong>
                
                <span> Web developer </span>
            
            </div>
        
            <footer>
                <a href="">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )

}