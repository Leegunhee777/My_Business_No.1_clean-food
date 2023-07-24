import { Filter } from '../page/list/state/filter';
import { ListRepository } from '../repository';

export class ListUseCase {
  private _listRepository: ListRepository;

  constructor(listRepository: ListRepository) {
    this._listRepository = listRepository;
  }

  async getFilterdList(filter: Filter) {
    const result = await this._listRepository.getList();
    return result;
  }
}
