import Socket from "../../../network/socket";
import { GroupRepository } from "../repository";

export class DetailRepositoryImpl implements GroupRepository{
  http;
  socket;

  constructor(http:any, socket:Socket) {
    this.http = http;
    this.socket = socket;
  }

  onListenSocket(event: any, callback: any){
    this.socket.onListenSocket(event, callback)
  }
  
  async getGroupList(): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
}
