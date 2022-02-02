import { IDesktop } from '../../types';
import classes from './Desktop.module.scss';

export function Desktop({ children }: IDesktop) {
  return (
    <div className={classes['modal-desktop']}>
      <div className={classes['content-wrapper']}>
        {children}
      </div>
    </div>
  );
}
