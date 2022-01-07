import styles from './Logo.module.css';
import Link from 'next/link';

export default function Logo () {
  return (
    <Link href='/' passhref><div className={styles.logo}>Elysia Honey</div></Link>
  );
};