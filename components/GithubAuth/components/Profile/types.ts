import type { Session } from 'next-auth';

export interface IProfile {
  session: Session;
  onSignOutClick: () => void;
}