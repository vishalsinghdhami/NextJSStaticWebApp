import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header/page'
import About from './About/page'
import Programs from './Programs/page'
import Contact from './Contact/page'
import HomePage from './HomePage/page'
import RootLayout from './layout'
export default function Home() {
  return (
    <RootLayout>
    <main className={styles.main}>
    <HomePage></HomePage>
    <About></About>
    <Programs></Programs>
    <Contact></Contact>
    </main>
    </RootLayout>
  )
}
