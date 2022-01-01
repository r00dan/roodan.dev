import { Icon } from "./components"
import { IButton, Themes } from "./types";

import s from './Button.module.scss';

export function Button({
  theme = Themes.DARK,
  children,
  className = '',
  bordredless = true,
  count,
  disabled,
  onClick,
  onHover,
}: IButton) {
  return (
    <button
      className={`${s.button} ${s[theme]} ${disabled && s.disabled} ${bordredless && s.borderless} ${className}`}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={onHover}
    >
      {children}
    </button>
  )
}

Button.Icon = Icon;
