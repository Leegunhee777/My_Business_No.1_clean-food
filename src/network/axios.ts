import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface IRequestParam extends AxiosRequestConfig {
  body?: object;
}

export class HttpClient {
  getCsrfToken: any;
  axios = Axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  constructor(getCsrfToken: any) {
    this.getCsrfToken = getCsrfToken;
  }

  async request(url: string, options: IRequestParam) {
    const { body, method, headers } = options;

    const req = {
      url,
      method,
      headers: {
        ...headers,
        'greenary-csrf-token': this.getCsrfToken(),
      },
      data: body,
    };

    try {
      const res = await this.axios(req);
      return res.data;
    } catch (err) {
      const { response } = err as AxiosError;
      //network error가 발생했거나, status code가 200~ 대가 아니면 catch로 들어오게된다.
      if (response) {
        const data: any = response.data;
        const message =
          data && data.hasOwnProperty('message')
            ? data.message
            : 'Something went wrong!';

        throw new Error(message);
      }

      //네트워크 에러로 인한 에러
      throw new Error('connection Error!');
    }
  }
}
