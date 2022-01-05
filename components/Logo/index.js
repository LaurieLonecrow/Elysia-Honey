import styles from './Logo.module.css';
import Link from 'next/link';

export default function Logo () {
  return (
    <Link href='/' passhref><h1 className={styles.logo}>Elysia Honey</h1></Link>
  );
};