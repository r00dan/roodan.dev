import { useState } from 'react';
import Link from 'next/link';
import s from '../styles/Navigation.module.css';

export function Navigation() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={s.navigation}>
      <ul>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/r00dan" target="_blank" rel="noreferrer">Gihub</a>
        </li>
      </ul>
      <div>
        Menu
      </div>
      {
        visible && (
          <div className={s.mobile_nav}>
             <ul>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <a href="https://github.com/r00dan" target="_blank" rel="noreferrer">Gihub</a>
              </li>
            </ul>
          </div>
        )
      }
    </div>
  )
}
