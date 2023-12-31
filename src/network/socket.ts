import socket from 'socket.io-client';

export default class Socket {
  io: any;
  constructor(getAccessToken: any) {
    //아래 socket(process.env.REACT_APP_BASE_URL);코드가 서버와 소켓을 연결시켜주는 코드임
    this.io = socket('http://localhost:5000', {
      //소켓에있는 auth라는 필드를 이용해서 토큰을 전달하게하려고한다!
      auth: cb => cb({ token: getAccessToken() }),
    });

    this.io.on('connect_error', (err: any) => {
      console.log('socket error', err.message);
    });
  }

  onListenSocket(event: any, callback: any) {
    if (!this.io.connected) {
      this.io.connect();
    }
    //.on을 통해 특정이벤트를 듣게 해줄수있다.
    this.io.on(event, (messge: any) => callback(messge));

    //특정이벤트를 듣고있는 걸 off 해주는 함수를 리턴해준다.off를 통해 특정 이벤트를 듣고있지 않게 off해줄수있음
    return () => this.io.off(event);
  }
}
