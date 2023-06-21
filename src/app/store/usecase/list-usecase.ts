import { ListRepository } from "../repository";
import { Store } from "../type";


export class ListUseCase {
  private _listRepository: ListRepository;

  constructor(listRepository: ListRepository) {
    this._listRepository = listRepository;
  }

  async getFilterdList(filter: Store.Filter) {
    const result =  await this._listRepository.getList();
    return result;
  }
}

