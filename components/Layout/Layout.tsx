import { GithubAuth } from '../GithubAuth/GithubAuth';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation'
import s from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className={s.layout}>
      <div className={s.wrapper}>
        <Logo />
        <div className={s.navigation__wrapper}>
          <Navigation />
          <GithubAuth />
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}
