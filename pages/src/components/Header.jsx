import Link from 'next/Link'
import styles from '../../../styles/Home.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.nav}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>

        <div className="signup">
            <a href="#">Signup</a>
        </div>
    </div>
  )
}
