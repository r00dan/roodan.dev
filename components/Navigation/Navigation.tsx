import Link from 'next/link';
import s from './Navigation.module.scss';

export function Navigation() {
  return (
    <ul className={s.list}>
      <li className={s.list__item}>
        <Link href="/works">
          <span>Works</span>
        </Link>
      </li>
      <li className={s.list__item}>
        <Link href="/blog">
          <span>Blog</span>
        </Link>
      </li>
      <li className={s.list__item}>
        <Link href="https://github.com/r00dan">
          <span>Gihub</span>
        </Link>
        {/* <a href="https://github.com/r00dan" target="_blank" rel="noreferrer">Gihub</a> */}
      </li>
    </ul>
  )
}
