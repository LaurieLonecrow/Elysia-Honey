import styles from './Polaroid.module.css';

const Polaroid = ({src}) => {
    return (
        <div className={styles.picture_container}>
        <img src={src} className={styles.polaroid}/> 
        </div>
    );
};

export default Polaroid;