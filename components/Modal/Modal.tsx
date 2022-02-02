import { Backdrop } from './components/Backdrop/Backdrop';
import { Desktop } from './components/Desktop/Desktop';
import { IModal } from './types';
import classes from './Modal.module.scss';

function ModalCompound({
  children,
  visibility,
  opacity = 50,
  onClose,
}: IModal) {
  return visibility ? (
    <div className={classes.modal}>
      <Backdrop
        opacity={opacity}
        onClick={onClose}
      />
      {children}
    </div>
  ) : (
    null
  );
}

export const Modal = Object.assign(ModalCompound, {
  Desktop,
})
