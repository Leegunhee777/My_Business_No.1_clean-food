import { atom } from "recoil";


type GroupType = {
  time: string;
  userName: string;
  type: string;
}

export type CalendarType = {
  date: string;
  group: GroupType[];
};

const initState: CalendarType[] = [];

export const calendarAtom = atom<CalendarType[]>({
  key:'calendarAtom',
  default: initState
});






