import { ListItemDto } from "../list-repository-impl";

export class MapperToListItem {
  id: number;
  name: string;
  description: string;

  constructor(value: ListItemDto ){
    this.id = value.id
    this.name = value.name
    this.description =value.description
  }
}


