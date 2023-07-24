import { AxiosResponse } from 'axios';

import { ListRepository } from '../repository';
import { MapperToListItem } from './mapper/mapperToCalendar';
import { Store } from '../model';

export type ListItemDto = {
  id: number;
  name: string;
  age: number;
  description: string;
  date: Date;
};

export class ListRepositoryImpl implements ListRepository {
  // async getTodos (): Promise<Result<Todo[]> | undefined> {
  //   try {
  //     const { status, data }: AxiosResponse<Todo[]> =  await axios.get('https://jsonplaceholder.typicode.com/todos');
  //     if (status < 500) {
  //       return Result.success(data);
  //     }
  //   } catch (err) {
  //     return Result.fail(errorMessage.listError);
  //   }
  // }

  http;

  constructor(http: any) {
    this.http = http;
  }
  async getList(): Promise<Store.ListItem[]> {
    // const response : AxiosResponse<ListItemDto[]>
    const result = serverCalendarList.map(
      (value: ListItemDto, index: number) => {
        return new MapperToListItem(value);
      }
    );

    return result;
  }
}

const serverCalendarList = [
  {
    id: 1,
    name: 'ldkjnsdfu',
    age: 24,
    description: '포도당이 넘칩니다.',
    date: new Date(),
  },
  {
    id: 2,
    name: 'ㅈ디ㅑㅕㅝ',
    age: 21,
    description: '감히 제가 감히 날다람쥐',
    date: new Date(),
  },
  {
    id: 3,
    name: 'ㄴㅣ마ㅓ우리마ㅓㅇㄹ',
    age: 18,
    description: '어찌할까요',
    date: new Date(),
  },
  {
    id: 4,
    name: '23r234',
    age: 15,
    description: '그렇게 해줘 어찌합니까',
    date: new Date(),
  },
  {
    id: 5,
    name: 'sdfasfㄴㅇㄹㄴㅇㄹ',
    age: 8,
    description: '그런데말입니다람쥐포도!',
    date: new Date(),
  },
  {
    id: 6,
    name: 'lsjdnf니어ㅝㅣㅏㄹㅇ8',
    age: 11,
    description: '그사이에도 많이도 변했는데 말이죠',
    date: new Date(),
  },
];
