export enum toastType {
  NotDefined = '',
  Success = 'success',
  Warn = 'warn',
  Error = 'error',
}

export interface ToastContent {
  type: toastType
  message: string
}
