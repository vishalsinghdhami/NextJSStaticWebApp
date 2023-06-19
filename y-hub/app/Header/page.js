import Link from "next/link"
export default function Header() {
  return (
    <main className='header'>
  
  <ul >
      <li>
        <Link legacyBehavior href="/HomePage">
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
    </ul>

    </main>
  )
}