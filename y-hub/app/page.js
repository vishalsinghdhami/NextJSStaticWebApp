import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header/page'
import About from './About/page'
import Programs from './Programs/page'
import Contact from './Contact/page'
import HomePage from './HomePage/page'

export default function Home() {
  return (
    
    <main className={styles.main}>
    <Header></Header>
    <HomePage></HomePage>
    <About></About>
    <Programs></Programs>
    <Contact></Contact>
    </main>
    
  )
}
