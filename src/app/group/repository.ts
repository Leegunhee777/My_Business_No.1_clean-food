export interface GroupRepository {
  onListenSocket(event: any, callback:any):void;
  getGroupList(): Promise<any[]>;
}