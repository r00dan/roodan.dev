import { useSession, signIn, signOut } from "next-auth/react";

import { Button } from "../Button/Button";
import { Profile } from './components/Profile/Profile';

import s from './GithubAuth.module.scss';

export function GithubAuth() {
  const { data: session } = useSession();

  return (
    <>
      {
        session ? (
          <Profile
            session={session}
            onSignOutClick={signOut}
          />
        ) : (
            <Button
              className={s.signin}
              onClick={() => signIn()}
          >
            Signin with Github
          </Button>
        )
      }
    </>
  )
}
