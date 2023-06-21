
export interface AuthRepository {
  getCsrfToken(): Promise<any>
  getUserInfo(): Promise<any>
  postSignUp(data: any): Promise<any>
  postSignIn(data: any): Promise<any>
  postSignOut(): void;
}