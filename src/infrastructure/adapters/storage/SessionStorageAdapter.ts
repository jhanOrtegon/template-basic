import { type IStorageAdapter } from './IStorageAdapter.interface'

export class SessionStorageAdapter implements IStorageAdapter {
  getItem(key: string): string | null {
    return sessionStorage.getItem(key)
  }
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value)
  }
  removeItem(key: string): void {
    sessionStorage.removeItem(key)
  }
}
