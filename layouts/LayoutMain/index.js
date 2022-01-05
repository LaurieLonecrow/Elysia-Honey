import { useEffect, useState } from 'react'
//components
import MainNav from '../../components/MainNav'
import Footer from '../../components/Footer';
//styles
import styles from './LayoutMain.module.css'

export default function Layout(props) {
    const [showNav, setShowNav] = useState(true);
    function scrollControl() {
        let scrollToTop = 0;
        window.addEventListener('scroll', function(){
           let scrollUp = window.pageYOffset;
           scrollToTop < scrollUp ? setShowNav(!showNav): setShowNav(showNav);
           scrollToTop = scrollUp;
        }, false)
    }
    useEffect(() => {
        scrollControl()
    },[]);
    return (
        <>
        {showNav? <MainNav/>: null}
        <main className={styles.main}>{props.children}</main>
        <Footer/>
        </>
    );
  };