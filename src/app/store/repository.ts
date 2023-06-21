import { Store } from "./type";

export interface ListRepository {
  getList(): Promise<Store.ListItem[]>;
}
