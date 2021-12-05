//styles
import styles from './LayoutColumns.module.css'

export default function LayoutColumns({title, subtitle, content, background, color}) {

    return (
        <div className={styles.columnWrapper} style={background}>
          <div className={styles.columnLeft} style={color}> 
          <h1>{title}</h1> 
          <h2>{subtitle}</h2>
          </div>
          <div className={styles.columnRight} style={color}> 
          <p>{content}</p>
          </div>
      </div>
      

    );
};