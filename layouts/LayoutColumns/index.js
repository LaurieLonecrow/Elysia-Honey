//styles
import styles from './LayoutColumns.module.css'

export default function LayoutColumns({title, subtitle, content}) {

    return (
        <div className={styles.columnWrapper}>
          <div className={styles.columnLeft}> 
          <h1>{title}</h1> 
          <h2>{subtitle}</h2>
          </div>
          <div className={styles.columnRight}> 
          <div>{content}</div>
          </div>
      </div>
      

    );
};