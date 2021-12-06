//components
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//styles


export default function Story() {


    return (
<>
        <Header title={'My Story'}/>
        <LayoutSections
        background={{backgroundColor: 'black'}}
        color={{color: 'rgb(254, 250, 224'}}
        title = {`I believe that hair has no gender`}
        content={`Style can be worn in any way desired by whoever’s rocking it, regardless of toxic rules and standards that the beauty industry has
        imposed over us regarding face shape, size, age, etc. My passion is cultivating a safe and emboldening experience in confidence through hair.`}
        source2={'https://res.cloudinary.com/lonecrow/image/upload/v1638735344/output-onlinepngtools_t5oxa7.png'}

        />
</>
    )}