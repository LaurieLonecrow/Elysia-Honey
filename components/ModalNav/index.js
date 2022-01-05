import Link from 'next/link';
//styles
import styles from './Modal.module.css';
import Logo from '../Logo'

export default function ModalNav({onClick}) {
  return (
    <div className={styles.mobileMenu}>
      <nav>
        <ul className={styles.mobileNav}>
          <li onClick={onClick} className={styles.mobileLink}><Link href='/'>Home</Link></li>
          <li onClick={onClick} className={styles.mobileLink}><Link href='/about'>About</Link></li>
          <li onClick={onClick} className={styles.mobileLink}><Link href='/pricing'>Pricing</Link></li>
          <li onClick={onClick} className={styles.mobileLink}><Link href='/story'>My Story</Link></li>
        </ul>
      </nav>
    </div>
  );
};