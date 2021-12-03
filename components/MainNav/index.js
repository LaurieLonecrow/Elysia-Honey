import Link from 'next/link'
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { motion } from 'framer-motion'

//components
import ModalNav from '../ModalNav';

//styles
import styles from './MainNav.module.css';

export default function MainNav() {
    const [showModal, setShowModal] = useState(false);

    function show() {
        return setShowModal(!showModal)
    }

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
      <Link href='/'><div className={styles.logo}>Elysia-Honey</div></Link>
      <nav className={styles.nav}>
        <ul>
          {/* <li className={styles.mainLink}>
            <Link href='/'>Home</Link>
          </li> */}
          <li className={styles.mainLink}>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.button} onClick={()=> show()}><CgMenu/></button>
    </header>
    {showModal ? <ModalNav /> : null}

    </motion.div>
    </motion.div>
    );
}