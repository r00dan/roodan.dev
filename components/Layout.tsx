import { Logo } from './Logo';
import { Navigation } from './Navigation'
import { AuthButton } from './AuthButton';
import s from '../styles/Layout.module.css';

interface IProps {
  children: React.ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className={s.layout}>
      <div className={s.wrapper}>
        <Logo />
        <Navigation />
        <AuthButton />
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}
