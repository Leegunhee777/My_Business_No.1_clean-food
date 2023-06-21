export module Store {

  export type ListItem = {
    id: number;
    name: string;
    description: string;
  }

  export type Filter = '' | '한식' | '일식' | '중식'

}
