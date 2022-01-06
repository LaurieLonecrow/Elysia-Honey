
//components
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//styles
import styles from './About.module.css'

//data
import {sectionInfo} from '../../constants/constants'


export default function About() {
  return (
  <>
    <Header title={'About'}/>
    <LayoutSections
        background={{backgroundColor: sectionInfo.about.backgroundColor}}
        src1={sectionInfo.about.imageSrc1}
        color={{color:sectionInfo.about.textColor}}
        title={sectionInfo.about.title}
        subtitle={sectionInfo.about.subtitle}
        content={sectionInfo.about.content}
    />
  </>
    )
  }

