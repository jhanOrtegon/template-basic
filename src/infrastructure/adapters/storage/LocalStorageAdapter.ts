import { type IStorageAdapter } from './IStorageAdapter.interface'

export class LocalStorageAdapter implements IStorageAdapter {
  getItem(key: string): string | null {
    return localStorage.getItem(key)
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
  removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
