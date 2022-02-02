import Link from "next/link";
import Image from "next/image";

import avatar from '../../public/avatar.jpg';
import s from './Logo.module.scss';


export function Logo() {
  return (
    <Link href="/">
      <div className={s.avatarWrapper}>
        <Image
          src={avatar}
          alt="avatar"
          className={s.avatar}
          width="100%"
          height="100%"
          placeholder="blur"
          quality={100}
        />
      </div>
    </Link>
  )
}
