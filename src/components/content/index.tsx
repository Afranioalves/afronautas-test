import Link from 'next/link'
import styles from './style.module.css'
import Card from '../card'
import { curses } from '@/data/curses'




const Content = () =>{

    const renderCurses = () =>{
        return curses.map((curse)=>{
            return <Card 
                    key={curse.id}
                    name={curse.curse_name}
                    description={curse.description}
                    localization={curse.localization}
                    students={curse.student_number}
                    cover={curse.cover}
                    type={curse.type}
                    mark={curse.mark}
                />
        })
    }

    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <p>🔥Você vai gostar destes</p>
                <Link href="#">Ver Todos  <i className='bx bx-right-arrow-alt'></i></Link>
            </div>

            <div className={styles.container_curses}>
               {renderCurses()}
               <button className={styles.button_more}>Ver Todos</button>
            </div>
        </section>
    )
}

export default Content