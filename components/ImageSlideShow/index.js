import Polaroid from "./Polaroid";
import styles from './Image.module.css'
import { polaroids } from "../../constants/constants";

export default function ImageSlideShow() {
    return (
        <div className={styles.slide_show}>
        {polaroids.map(pic => (
            <Polaroid src={pic.src}/>
        ))}
        </div>
    )
  }