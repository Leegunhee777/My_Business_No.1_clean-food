import { AuthRepository } from "../repository";

export class AuthRepositoryImpl implements AuthRepository {
  http;

  constructor(http: any) {
    this.http = http;
  }

  async getCsrfToken(): Promise<any> {  
      // const response = await http.request('/auth/csrf-token', {
      //   method: 'GET',
      // });   
      return 'qweqweqwe';
  }

  async getUserInfo(): Promise<any> {
    console.log('userInfo 호출');

    const response = await this.http.request('/auth/me', {
      method: 'GET',
    });   
  
    // return {
    //   id:'이건희'
    // }
  }

  async postSignUp(data: any): Promise<any> {
    const response = await this.http.request('/auth/signup',{
      method: 'POST',
      body: data
    })
    return response
  }

  async postSignIn(data: any): Promise<any> {
    const response = await this.http.fetch('/auth/login', {
      method: 'POST',
      body: data,
    });

    return response;
  }

  async postSignOut() {
    return this.http.fetch('/auth/logout', {
      method: 'POST',
    });
  }
}