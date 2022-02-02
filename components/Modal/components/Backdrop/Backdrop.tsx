import { IBackdrop } from '../../types';
import classes from './Backdrop.module.scss';

export function Backdrop({
  opacity,
  onClick,
}: IBackdrop) {
  return (
    <div
      className={classes.backdrop}
      style={{ opacity: opacity / 100 }}
      onClick={onClick}
    />
  );
}
