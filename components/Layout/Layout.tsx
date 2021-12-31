import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation'
import s from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className={s.layout}>
      <div className={s.wrapper}>
        <Logo />
        <Navigation />
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}