import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { motion } from 'framer-motion'

//components
import Link from 'next/link'
import ModalNav from '../ModalNav';
import HeaderTitle from '../HeaderTitle';
//styles
import styles from './MainNav.module.css';
import Logo from '../Logo';

export default function MainNav() {
    const [showModal, setShowModal] = useState(false);
    
    function show() {
        return setShowModal(!showModal)
    }
    //animation
    const fadeIn = {
        initial: {
          y: -100,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
    };
    return (
    <motion.div initial = 'initial' animate = 'animate'>
    <motion.div variants={fadeIn} className={styles.mainNav}>
    <header className={styles.header}>
      <Logo/>
      <button className={styles.button} onClick={()=> show()}><CgMenu/></button>
    </header>
    {showModal ? <ModalNav onClick={()=> show()}/> : null}

    </motion.div>
    </motion.div>
    );
}