import Link from 'next/Link'
import styles from '../../../styles/Home.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>

        <div className="signup">
            <Link href="/signup">Signup</Link>
        </div>
    </div>
  )
}
