
import { ListRepository } from "../repository";
import { Store } from "../type";
import { ListUseCase } from "./list-usecase";



class FakeListRepository implements ListRepository {
  async getList(): Promise<Store.ListItem[]> {
    const data =  [
      {
        id: 1,
        name: 'ldkjnsdfu',
        description: '포도당이 넘칩니다.',
      },
      {
        id: 2,
        name: 'ㅈ디ㅑㅕㅝ',
        description: '감히 제가 감히 날다람쥐',
      },
      {
        id: 3,
        name: 'ㄴㅣ마ㅓ우리마ㅓㅇㄹ',
        description: '어찌할까요',
      },
      {
        id: 4,
        name: '23r234',
        description: '그렇게 해줘 어찌합니까',
      },
      {
        id: 5,
        name: 'sdfasfㄴㅇㄹㄴㅇㄹ',
        description: '그런데말입니다람쥐포도!',
      },
      {
        id: 6,
        name: 'lsjdnf니어ㅝㅣㅏㄹㅇ8',
        description: '그사이에도 많이도 변했는데 말이죠',
      }
    ]

    return data ;
  }
  
}


describe('ListUseCase', () => {
  const fakeListRepository = new FakeListRepository();
  const listUseCase = new ListUseCase(fakeListRepository);

  it('링터링된 리스트 가져오는 유스케이스', async () => {

    const result = await listUseCase.getFilterdList('');
    expect(result.length).toEqual(6);
  });
});

