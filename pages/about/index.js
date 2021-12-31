
//components
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import LayoutSections from '../../layouts/LayoutSections'

//styles
import styles from './About.module.css'


export default function About() {


    return (
<>
        <Header title={'About'}/>
        <LayoutSections
        background={{backgroundColor: '#fefae0'}}
        source1={'https://res.cloudinary.com/lonecrow/image/upload/v1638749918/Elysia-Honey/output-onlinepngtools_6_qpskor.png'}
        color={{color: 'black'}}
        title={`Elysia-Honey, here!!`}
        subtitle={`You can call me Big ‘Leesh if you want.`}
        content={`My pronouns are she/her. I’m a Richmond, VA based hairdresser focusing on straight-razor carved, curly shags, mullets, retro-inspired shapes, bitty bangs, and affirming transformations.`}
        />
      
</>
    )
  }

