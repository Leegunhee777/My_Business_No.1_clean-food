import { AuthRepository } from "../repository";

export class AuthUseCase {
  private _authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this._authRepository = authRepository;
  }

  async initCsrfToken() {
    const response = await this._authRepository.getCsrfToken();
    return response;
  }
  async initUserInfo(){
    const response = await this._authRepository.getUserInfo();
    return response;
  }

  async signUp({
    username,
    password,
    name,
    email,
    url,
  }: {
    username: string;
    password: string;
    name: string;
    email: string;
    url: string;
  }) {
    const temp = {
      username,
      password,
      name,
      email,
      url
    }

    await this._authRepository.postSignUp(temp);
  }

  async signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const temp = {
      username,
      password
    }

    await this._authRepository.postSignIn(temp);
  }

  async signOut() {
    this._authRepository.postSignOut();
  }
}

