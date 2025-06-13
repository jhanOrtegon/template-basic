export interface IFileStorageService {
  uploadFile(path: string, data: Blob | Buffer, options?: Record<string, any>): Promise<string> // retorna URL o ruta
  deleteFile(path: string): Promise<void>
  getFileUrl(path: string): Promise<string>
}
