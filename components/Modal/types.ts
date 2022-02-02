export interface IModal {
  children: React.ReactNode;
  visibility: boolean;
  opacity?: number;
  onClose: () => void;
}

export interface IBackdrop {
  opacity: number;
  onClick: () => void;
}

export interface IDesktop {
  children: React.ReactNode;
}