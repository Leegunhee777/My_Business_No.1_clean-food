import { GroupRepository } from "../repository";

export class DetailUseCase {
  private _groupRepository: GroupRepository;
  
  constructor(groupRepository: GroupRepository) {
    this._groupRepository = groupRepository;
  }

  onListenSocket(event:any ,callback: any) { 
    this._groupRepository.onListenSocket(event, callback)
  }
}