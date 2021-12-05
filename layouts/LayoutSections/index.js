//styles
import styles from './LayoutSections.module.css'

export default function LayoutSections({title, subtitle, content, background, color, source1, source2}) {

    return (
        <div className={styles.wrapper} style={background}>
          <img className={styles.divider} src={source1}/>

          <div className={styles.titles} style={color}> 
          <h1>{title}</h1> 
          <h2>{subtitle}</h2>
          </div>
          <div className={styles.content} style={color}> 
          <p>{content}</p>
          </div>
          <img className={styles.divider} src={source2}/>

      </div>
      

    );
};