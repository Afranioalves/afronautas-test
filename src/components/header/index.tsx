import styles from './style.module.css'


const Header = () =>{

    return(
        <header className={styles.header}>
            <div className={styles.cover}></div>
            <div className={styles.content}>
                <h1>Afronautas</h1>
                <h2>The African Education Community</h2>
            </div>
            <div className={styles.mouse}>
                <div></div>
                {/*<i className='bx bxs-chevron-down'></i>
                <i className='bx bxs-chevron-down'></i>*/}
            </div>
        </header>
    )
}

export default Header