import Link from "next/link";
import s from '../styles/Logo.module.css';

export function Logo() {
  return (
    <Link href="/">
      <h1 className={s.logo}>
        Bogdan Rudenko
      </h1>
    </Link>
  )
}
