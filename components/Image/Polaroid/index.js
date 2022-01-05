import styles from './Polaroid.module.css';

const Polaroid = ({href}) => {
    return (
        <div className={styles.picture_container}>
        <img src={href} className={styles.polaroid}/> 
        </div>
    );
};

export default Polaroid;