type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "jack",
};
let cid: any = 1;
let costumerId = <number>cid;

const addNum = (x: number, y: number): number => {
  return x + y;
};

interface User1 {
  id: number;
  name: string;
  age?: number;
}

const user1: User1 = {
  id: 1,
  name: "john",
};

function getArray<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["h", "df", "s", "df"]);

function getFirstLetter<T>(array: T[]): T {
  return array[0];
}

getFirstLetter<string>(["jjf", "jsj"]);

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse<{name: string, age: number}> = {
  data: {
    name: "john",
    age: 28,
  },
  isError: true,
};
