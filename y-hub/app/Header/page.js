import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <main className='header d-inline-flex m-4 p-8'>
  
 
      <li>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/About">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior  href="/Programs">
          <a>Programs</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior  href="/Contact">
          <a>Contact</a>
        </Link>
      </li>
 
    </main>
  )
}