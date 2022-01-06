import styles from './Polaroid.module.css';

const Polaroid = ({src}) => {
    
    return (
        <div className={styles.picture_container}>
        <img src={src} className={styles.polaroid} alt="Instagram_image"/> 
        </div>
    );
};

export default Polaroid;