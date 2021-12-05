
//components
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//styles
import styles from './About.module.css'


export default function About() {


    return (
<>
      <div>
        <Header/>
        <LayoutSections
        background={{backgroundColor: '#fefae0'}}
        source1={'https://res.cloudinary.com/lonecrow/image/upload/v1638735344/output-onlinepngtools_t5oxa7.png'}
        color={{color: 'black'}}
        title={`Elysia-Honey, here!!`}
        subtitle={`You can call me Big ‘Leesh if you want.`}
        content={`My pronouns are she/her. I’m a Richmond, VA based hairdresser focusing on straight-razor carved, curly shags, mullets, retro-inspired shapes, bitty bangs, and affirming transformations.`}
        />

        <LayoutSections
        background={{backgroundColor: 'black'}}
        title = {`I believe that hair has no gender`}
        content={`Style can be worn in any way desired by whoever’s rocking it, regardless of toxic rules and standards that the beauty industry has
        imposed over us regarding face shape, size, age, etc. My passion is cultivating a safe and emboldening experience in confidence through hair.`}
        source2={'https://res.cloudinary.com/lonecrow/image/upload/v1638735344/output-onlinepngtools_t5oxa7.png'}

        />
        
        <LayoutSections
        background={{backgroundColor: '#fefae0'}}
        color={{color: 'black'}}
        title={`All pricing is sliding scale by the hour $65-100.`}
        content={`One-on-one look and learn classes are available to licensed hairdressers and can be booked via Direct message
        Link to Instagram`}
        source2={'https://res.cloudinary.com/lonecrow/image/upload/v1638735344/output-onlinepngtools_t5oxa7.png'}
        />        

      </div>

      
</>
    )
  }

