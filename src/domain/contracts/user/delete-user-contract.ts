export interface DeleteUserContract {
  delete(id: string): Promise<void>
}