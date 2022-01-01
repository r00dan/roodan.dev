export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IButton {
  children: React.ReactNode;
  theme?: Themes;
  className?: string;
  bordredless?: boolean;
  count?: number;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}