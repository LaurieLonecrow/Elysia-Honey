//components
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//data
import { sectionInfo } from '../../constants/constants'


export default function Pricing() {


    return (
<>
        <Header title={'Pricing'}/>
        <LayoutSections
        background={{backgroundColor: sectionInfo.pricing.backgroundColor}}
        color={{color: sectionInfo.pricing.textColor}}
        title={sectionInfo.pricing.title}
        content={sectionInfo.pricing.content}
        src2={sectionInfo.pricing.imageSrc2}
        />        

</>
    )}