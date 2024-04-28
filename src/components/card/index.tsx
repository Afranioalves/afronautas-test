import styles from './style.module.css'
import {useEffect} from 'react'
import AOS from 'aos'

interface PROPS{
    name:string,
    description:string,
    type?:string,
    students:string,
    localization:string,
    cover:string,
    mark:string
}

const Card = (props:PROPS) =>{

    useEffect(()=>{
        if(window !== undefined)  AOS.init()
    },[])

    const {name, description, type, students, localization, cover, mark} = props

    return(
        <article className={styles.container} data-aos="fade-down"   data-aos-easing="linear"  data-aos-duration="1000">

            <div className={styles.box_cover}>
                <img src={cover} alt="curse-cover" />
            </div>

            <div className={styles.box_category}>
                <div>
                    <img src="/img/security-time.svg" alt="icon" />
                    <p>{mark}</p>
                </div>
               
                <div>
                    <img src="/img/flash.svg" alt="icon" />
                    <p>{type}</p>
                </div>

            </div>
            <div className={styles.box_description}>
                <h1>{name.length > 24 ? `${name.substring(0,30)}...`: name}</h1>
                <p>{description.length > 68 ? `${description.substring(0,80)}...`: description}</p>
            </div>

            <div className={styles.box_more_information}>
                <div>
                    <i className='bx bxs-map'></i>
                    <p>{localization}</p>
                </div>

                <div>
                    <i className='bx bxs-group' ></i>
                    <p>{students}</p>
                </div>
            </div>

        </article>
    )
}

export default Card