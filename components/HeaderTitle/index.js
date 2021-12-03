//styles
import styles from './HeaderTitle.module.css'

export default function HeaderTitle({title}) {
    return (
        <>
        <h1 className={styles.nameHeader}>{title}</h1>
        </>
    )
  }