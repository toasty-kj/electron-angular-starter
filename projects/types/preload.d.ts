export interface API {
  getVersion: () => Promise<string>
  getDownloadingStatus: () => Promise<boolean>
  convertJsonToCsv: (json: string) => Promise<boolean>
}

declare global {
  interface Window {
    api: API
  }
}
