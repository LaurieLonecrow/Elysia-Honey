//styles
import styles from './HeaderTitle.module.css'

export default function HeaderTitle({title}) {
    return (
        <div className={styles.nameHeaderWrapper}>
        <h1 className={styles.nameHeader}>{title}</h1>
        </div>
    )
  }