import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Header/Navbar'
import HomePage from './Header/HomePage'
import About from './About/About'
import Programs from './Programs/Programs'
import Contact from './Contact/Contact'
export default function Home() {
  return (
    <main className={styles.main}>
    <Navbar></Navbar>
    <HomePage></HomePage>
    <About></About>
    <Programs></Programs>
    <Contact></Contact>
    </main>
  )
}
