import Link from 'next/link';
import s from '../styles/Navigation.module.css';

export function Navigation() {
  return (
    <ul className={s.navigation}>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/r00dan" target="_blank" rel="noreferrer">Gihub</a>
      </li>
    </ul>
  )
}
