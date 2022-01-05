//components
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//data
import { sectionInfo } from '../../constants/constants'


export default function Story() {


    return (
<>
        <Header title={'My Story'}/>
        <LayoutSections
        background={{backgroundColor: sectionInfo.story.backgroundColor}}
        color={{color: sectionInfo.story.textColor}}
        title = {sectionInfo.story.title}
        content={sectionInfo.story.content}
        source2={sectionInfo.story.imageSrc2}
        />
</>
    )}