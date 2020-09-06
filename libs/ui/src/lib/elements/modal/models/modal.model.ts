export interface IModalConfig<T> {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: T;
  width?: string | number;
  height?: string | number;
}

// tslint:disable-next-line:no-any
export const DEFAULT_MODAL_CONFIG: IModalConfig<any> = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  width: 320,
};
