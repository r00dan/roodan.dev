import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

import avatar from '../../public/images/avatar.jpg';
import s from './Logo.module.scss';

const MAX_DEGREES: number = 360;
const SPEED: number = 60;

export function Logo() {
  const [degrees, setDegrees] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setDegrees((prev) => (prev + 1));
    }, SPEED);
  }, []);

  useEffect(() => {
    if (degrees >= MAX_DEGREES) {
      setDegrees(0);
    }
  }, [degrees]);
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/">
      <div className={s.logo}>
        <div
          className={s.avatar_wrapper}
          style={{ backgroundImage: `linear-gradient(${degrees}deg, #4aff7d 0%, #69f0ff 50%, #3152f5 100%)` }}
        >
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
        <h1 className={s.title}>
          Bogdan Rudenko
        </h1>
      </div>
    </Link>
  )
}
