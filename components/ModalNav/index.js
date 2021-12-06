import Link from 'next/link';

//styles
import styles from './Modal.module.css';


export default function ModalNav() {


    return (
    <div className={styles.mobileMenu}>
        <nav>
          <ul className={styles.mobileNav}>
            <li className={styles.mobileLink}>
            <Link href='/about'>About</Link>
            </li>
            <li className={styles.mobileLink}>
            <Link href='/pricing'>Pricing</Link>
            </li>
            <li className={styles.mobileLink}>
            <Link href='/story'>My Story</Link>
            </li>
          </ul>
        </nav>

    </div>
    )
}