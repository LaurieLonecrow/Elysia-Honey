//components
import Link from 'next/link'

//styles
import {BsInstagram} from 'react-icons/bs'
import styles from './Footer.module.css'

export default function Footer () {

    return (
        <div className={styles.wrapper}> 
        <ul className={styles.list}>
            <li className={styles.link}>
            <Link href='/'><BsInstagram/></Link>
            </li>
        </ul>
        </div>

    )
}