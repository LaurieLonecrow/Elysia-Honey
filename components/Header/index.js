
//components
import HeaderTitle from '../HeaderTitle'
//styles
import styles from './Header.module.css'

export default function Header({title}) {
    return (
        <div className={styles.header} >
        <HeaderTitle title={title}/>
        </div>

    )
  }