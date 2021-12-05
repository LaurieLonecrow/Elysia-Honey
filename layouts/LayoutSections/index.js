//styles
import styles from './LayoutSections.module.css'

export default function LayoutSections({title, subtitle, content, background, color, source}) {

    return (
        <div className={styles.wrapper} style={background}>
          <img className={styles.divider} src={source}/>
          <div className={styles.titles} style={color}> 
          <h1>{title}</h1> 
          <h2>{subtitle}</h2>
          </div>
          <div className={styles.content} style={color}> 
          <p>{content}</p>
          </div>
      </div>
      

    );
};