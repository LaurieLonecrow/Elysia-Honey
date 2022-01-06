
import Polaroid from "./Polaroid";
import styles from './Image.module.css'
import { polaroids } from "../../constants/constants";
import useWindowSize from "../../hooks/useWindowSize";


export default function ImageSlideShow() {
    const size = useWindowSize();
    return (
        <div className={styles.slide_show}>
        {size.width < 576 ? (polaroids.slice(0,3).map(pic => (
          <Polaroid key={pic.id} src={pic.src}/>))) 
          : polaroids.map(pic => (<Polaroid key={pic.id} src={pic.src}/>))}
        </div>
    )
  }