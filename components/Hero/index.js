//components
import Image from 'next/image'
import HeaderTitle from '../HeaderTitle'
//styles
import styles from './Hero.module.css'

export default function Hero() {

    return (
        <div className={styles.background}>
   <div className={styles.circleBackdrop0}>
    <div className={styles.circleBackdrop1}>
    <div className={styles.circleBackdrop2}> 
        <Image
        src="https://res.cloudinary.com/lonecrow/image/upload/v1637954273/IMG_0075_1_pabzyu.png"
        alt="elysia"
        width={353}
        height={477}
      />
     </div>
    </div>
    </div> 
    <HeaderTitle title={`Howdy!`}/>
        </div>
    )
}