import { Store } from './model';

export interface ListRepository {
  getList(): Promise<Store.ListItem[]>;
}
