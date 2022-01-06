import Link from 'next/link';
import styles from './Polaroid.module.css';

const Polaroid = ({src, href}) => {
    
    return (
        <Link href={href}>
        <div className={styles.picture_container}>
        <img src={src} className={styles.polaroid} alt="Instagram_image"/> 
        </div>
        </Link>

    );
};

export default Polaroid;