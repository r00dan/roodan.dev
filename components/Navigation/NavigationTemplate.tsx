import Link from 'next/link';
import { Modal } from '../Modal/Modal';
import {
  CogIcon,
  WorksIcon,
  PostsIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
  HomeIcon,
} from '../../icons';
import classes from './Navigation.module.scss';
import { INavigation } from './types';

export function NavigationTemplate({ areSettingsOpen, setSettingsOpen }: INavigation) {
  return (
    <>
      <ul className={classes.list}>
        <li className={classes.list__item}>
          <Link href="/" passHref>
            <HomeIcon />
          </Link>
        </li>
        <li className={classes.list__item}>
          <Link href="/works" passHref>
            <WorksIcon />
          </Link>
        </li>
        <li className={classes.list__item}>
          <Link href="/blog" passHref>
            <PostsIcon />
          </Link>
        </li>
        <li className={classes.list__item}>
          <CogIcon
            onClick={() => setSettingsOpen(true)}
          />
        </li>
        <li className={classes.list__item}>
          <Link href="https://github.com/r00dan" passHref>
            <GithubIcon />
          </Link>
        </li>
      </ul>

      <Modal
        visibility={areSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      >
        <Modal.Desktop>
          Theme: <MoonIcon />
        </Modal.Desktop>
      </Modal>
    </>
  )
}
