//components

//styles
import {BsInstagram} from 'react-icons/bs'
import ImageSlideShow from '../ImageSlideShow'
import styles from './Footer.module.css'

 const Footer = () => (

        <div className={styles.wrapper}> 
          <div className={styles.list}>
            <a className={styles.link} href='https://www.instagram.com/elysiahoney/'><BsInstagram/></a>
          </div>
          <h2 className={styles.footerText}>{`Booking through Instagram DM @elysiahoney --- 
          Booking through Instagram DM @elysiahoney ---`}</h2>
          <ImageSlideShow/>
        </div>

    )

export default Footer