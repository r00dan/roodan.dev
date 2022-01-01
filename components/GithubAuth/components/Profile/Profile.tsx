import Image from 'next/image'

import { IProfile } from './types';
import s from './Profile.module.scss';

export function Profile({
  session,
  onSignOutClick,
}: IProfile) {
  console.log(session);
  const { user } = session;
  return (
    <div className={s.profile}>
      <div className={s.profile__info}>
        {user?.image && (
          <Image
            src={user.image}
            alt='avatar'
            className={s.profile__avatar}
            width={32}
            height={32}
          />
        )}
        <div className={s.profile__name}>{user?.name}</div>
      </div>
      <button
        className={s.profile__signout}
        onClick={onSignOutClick}
      >
        Sign out
      </button>
    </div>
  );
}
