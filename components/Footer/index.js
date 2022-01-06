//components

//styles
import {BsInstagram} from 'react-icons/bs'
import ImageSlideShow from '../ImageSlideShow'
import styles from './Footer.module.css'

 const Footer = () => (

        <div className={styles.wrapper}> 
          <h2 className={styles.footerText}>{`Booking through Instagram DM @elysiahoney --- 
          Booking through Instagram DM @elysiahoney ---`}</h2>
          <ul className={styles.list}>
            <li className={styles.link}>
            <a href='https://www.instagram.com/elysiahoney/'><BsInstagram/></a>
            </li>
          </ul>
          <ImageSlideShow/>
        </div>

    )

export default Footer